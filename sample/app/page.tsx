import Head from "next/head";
import "../app/styles/global.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./images/1.png";
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
                src={logo}
                width={150}
                height={150}
                alt="Picture of the author"
                className="profile-image"
              />
              <div className="header-content">
                <p className="text-xl text-gray-600">AI Specialist</p>
                <p className="">AI Specialist</p>
                <h1 className="heading-1 animated-text">Your Name</h1>
                <div className="mt-4"></div>
              </div>
            </div>
            <div className="mt-4">
              <p>
                Email:{" "}
                <a href="hoangminhkhoi3018@gmail.com" className="text-blue-500">
                  your.email@example.com
                </a>
              </p>
              <p>Phone: 123-456-7890</p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-blue-500"
                >
                  linkedin.com/in/yourprofile
                </a>
              </p>
              <p>
                <nav className="mb-6">
                  <Link
                    href="/dashboard"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    🤣🤣🤣 To Dashboard
                  </Link>
                </nav>
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Summary
            </h2>
            <p>
              Passionate AI specialist with experience in machine learning, deep
              learning, and data analysis.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Experience
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Company A - AI Engineer</h3>
              <p className="text-gray-600">Jan 2020 - Present</p>
              <ul className="list-disc list-inside">
                <li>
                  Developed machine learning models for predictive analytics.
                </li>
                <li>
                  Collaborated with data scientists to improve model accuracy.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Company B - Data Scientist
              </h3>
              <p className="text-gray-600">Jun 2018 - Dec 2019</p>
              <ul className="list-disc list-inside">
                <li>Analyzed large datasets to extract actionable insights.</li>
                <li>Built data pipelines for efficient data processing.</li>
              </ul>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">
                University X - MSc in Computer Science
              </h3>
              <p className="text-gray-600">2016 - 2018</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                University Y - BSc in Computer Science
              </h3>
              <p className="text-gray-600">2012 - 2016</p>
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
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Prompting</span>
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
          </section>
          {/* <section></section> */}
        </div>
      </div>
    </div>
  );
}
