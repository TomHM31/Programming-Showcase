import Head from "next/head";
import "../app/styles/global.css";
import Link from "next/link";
import Image from "next/image";
import portrait from "./images/portrait.jpg";
import ChatBox from "./components/chatbox";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-mono ">
      <Header />
      <div className="hero-section text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl">Explore my work and experience in AI</p>
      </div>
      <div className="content-wrapper mt-32">
        <ChatBox />
        <div className="content-box">
          <section className="mb-8">
            <div className="header-container">
              <Image
                src={portrait}
                alt="Picture of the author"
                className="profile-image"
              />
              <div className="header-content">
                <p className="text-xl text-gray-600">Aspiring AI</p>
                <p className="">"Consistence is key to success"</p>
                <h1 className="heading-1 animated-text">Hoang Minh Khoi</h1>
                <div className="mt-4"></div>
              </div>
            </div>
            <div className="mt-4">
              <p>
                Email:{" "}
                <a href="hoangminhkhoi3018@gmail.com" className="text-blue-500">
                  hoangminhkhoi3108@gmail.com
                </a>
              </p>
              <p>Phone: 0422296339 </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/tom-hoang-3a99ba319/"
                  className="text-blue-500"
                >
                  Tom Hoang
                </a>
              </p>
              <p></p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Summary
            </h2>
            <p>
              Passionate AI enthusiastic with experience in machine learning,
              deep learning, and data analysis.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Experience
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-l font-semibold mb-3">
                  FPT Software - Full Stack Developer & AI researcher (STU)
                </h3>
                <p className="text-gray-600">Oct 2023 - Jan 2024</p>
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Built advanced regression, classification, and clustering
                  models for research and product development
                </li>
                <li>
                  Collaborated with senior DevOps, achieving a 15% boost in
                  coding efficiency
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold mb-3">
                  FPT Software - AI Prompt (EBS)
                </h3>
                <p className="text-gray-600">Oct 2024 - Jan 2025</p>
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Created and optimized AI prompts for email automation,
                  translation, and data analysis
                </li>
                <li>
                  Implemented data pipelines for more efficient processing and
                  analytics
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold mb-3">
                  Twin - AI Prompt & Chatbot
                </h3>
                <p className="text-gray-600">Oct 2024 - Jan 2025</p>
              </div>
              <ul className="list-disc list-inside">
                <li>
                  Developed and integrated AI-driven chatbots using Google
                  “Gemini” with vector DB and BigQuery
                </li>
                <li>
                  Implement new conversation-based features that boosted overall
                  efficiency by 20%
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Education
            </h2>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Deakin University - Bachelor of Artificial Intelligence
              </h3>
              <p className="text-gray-600">2023 - Current</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Skills
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Machine Learning</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Prompting</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>NLP</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Deep Learning</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          {/* <section></section> */}
        </div>
      </div>
    </div>
  );
}
