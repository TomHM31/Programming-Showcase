"use client";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import promptTemplate from "../templates/prompt.tmpl";

// Initialize Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateResponse = async (userInput: string) => {
    try {
      const prompt = `${promptTemplate}\nUser: ${userInput}`;
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-latest",
      });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, I encountered an error processing your request.";
    }
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { text: input, isBot: false }]);

    const response = await generateResponse(input);
    setMessages((prev) => [...prev, { text: response, isBot: true }]);

    setInput("");
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          💬
        </button>
      ) : (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3>AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${msg.isBot ? "text-left" : "text-right"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.isBot ? "bg-gray-200" : "bg-blue-100"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="text-center">
                <span className="animate-pulse">Typing...</span>
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
