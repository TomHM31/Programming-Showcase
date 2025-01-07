"use client";
import { createContext, useState, useContext, type ReactNode } from "react";

type Message = { text: string; isBot: boolean };

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

// Initialize with default value
const ChatContext = createContext<ChatContextType>({
  messages: [{ text: "How can I help you today?", isBot: true }],
  setMessages: () => {},
});

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "How can I help you today?", isBot: true },
  ]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    console.error("useChat must be used within a ChatProvider");
    return {
      messages: [{ text: "Chat system unavailable", isBot: true }],
      setMessages: () => {},
    };
  }
  return context;
}
