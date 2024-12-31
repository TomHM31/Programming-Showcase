import Link from "next/link";
import Image from "next/image";
import gaming from "../images/gaming.png";
import coding from "../images/coding.png";
import rocket from "../images/rocket.png";
import potato from "../images/potato.png";
import Header from "../components/header";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray p-6 font-mono">
      <Header />

      <main className="dashboard text-white">
        <h1 className="heading-2 text-white">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-700 text-white p-6 rounded-lg fade-up  ">
            <h2 className="text-xl font-semibold mb-4">Lost In Space</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://gradienty.codes/animations">
                <Image
                  src={gaming}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div>
                  <p className="">"A 2-D space exploration"</p>
                  <p className="mt-3">Additional content</p>
                  <p className="mt-3">Additional content</p>
                  <p className="mt-3">Additional content</p>
                  <p className="mt-3">Additional content</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <button className="btn-grad ">View Project</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">AI Chatbox</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://gradienty.codes/animations">
                <Image
                  src={coding}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div>
                  <p className="">"Chatbox powered by Gemini "</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <button className="btn-grad ">View Project</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://gradienty.codes/animations">
                <Image
                  src={rocket}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div>
                  <p className="">Description of the project</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <button className="btn-grad ">View Project</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://gradienty.codes/animations">
                <Image
                  src={potato}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div>
                  <p className="text-gray-700">Description of the project</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                  <p className="mt-2">Additional content</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <button className="btn-grad ">View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
