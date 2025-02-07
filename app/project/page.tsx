import Link from "next/link";
import Image from "next/image";
import gaming from "../images/lost_in_space.png";
import coding from "../images/chatbot.png";
import rocket from "../images/rocket.png";
import potato from "../images/tuning.png";
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
              <Link href="https://github.com/TomHM31/LostinSpace">
                <Image
                  src={gaming}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div className="space-y-5">
                  <p className="">"A 2-D space exploration"</p>
                  <p className="mt-3">Infinite exploration</p>
                  <p className="mt-3">
                    Real-time physics and collision detection
                  </p>
                  <p className="mt-3">Multiple weapon systems and power-ups</p>
                  <p className="mt-3">Written in C++</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <Link href="https://github.com/TomHM31/LostinSpace">
                    <button className="btn-grad ">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">AI Chatbox</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://github.com/TomHM31/AI-Chatbox">
                <Image
                  src={coding}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div className="space-y-5">
                  <p className="">"Chatbox powered by Gemini "</p>
                  <p className="mt-2">
                    Natural language processing capabilities
                  </p>
                  <p className="mt-2">Context-aware responses</p>
                  <p className="mt-2">Custom prompt engineering</p>
                  <p className="mt-2">Built with Next.js and TypeScript</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <Link href="https://github.com/TomHM31/AI-Chatbox">
                    <button className="btn-grad ">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">Develop ML Solution</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://github.com/TomHM31/Develop-ML">
                <Image
                  src={rocket}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div className="space-y-1">
                  <p className="">
                    "Machine learning pipeline for predictive analytics"
                  </p>
                  <p className="mt-2">Implements deep learning models</p>
                  <p className="mt-2">
                    Compete against model from research paper
                  </p>
                  <p className="mt-2">
                    Used Recursive Feature Elimination, VotingClassifier,
                    RandonizedSearchCV
                  </p>
                  <p className="mt-2">Built with Python</p>
                </div>
                <div className="mt-40 flex justify-center">
                  <Link href="https://github.com/TomHM31/Develop-ML">
                    <button className="btn-grad ">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg fade-up delay-100 ">
            <h2 className="text-xl font-semibold mb-4">xDeepFM Replication</h2>
            <div className="flex flex-row items-start gap-10">
              <Link href="https://github.com/TomHM31/xDeepFM-Replication">
                <Image
                  src={potato}
                  width={400}
                  height={150}
                  alt="Lost in Space"
                  className="image-vibrate"
                />
              </Link>
              <div className="flex-1 flex-col h-full">
                <div className="space-y-5">
                  <p className="mt-2">"Hyperparameter tuning experiments"</p>
                  <p className="mt-2">
                    Optimizing CIN layers, incoperating dynamic feature
                    selection
                  </p>
                  <p className="mt-2">
                    Achived 10% improvement in inference speed
                  </p>
                  <p className="mt-2">
                    Python, PyTorch, and statistical analysis
                  </p>
                </div>
                <div className="mt-40 flex justify-center">
                  <Link href="https://github.com/TomHM31/xDeepFM-Replication">
                    <button className="btn-grad ">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
