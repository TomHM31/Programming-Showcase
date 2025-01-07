import Image from "next/image";
import profileImage from "../images/1.png";
import { GrAchievement } from "react-icons/gr";
// import achievement1 from "../images/achievement1.png";
// import achievement2 from "../images/achievement2.png";
// import achievement3 from "../images/achievement3.png";
import logo from "../images/logo.jpg";
import Header from "../components/header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray p-6 font-mono text-white">
      <Header />
      <main className="max-w-7xl mx-auto space-y-16 py-12 mt-24">
        {/* Section 1: Introduction */}
        <div className="bg-zinc-800 rounded-xl shadow-lg p-12 mb-12 fade-left mt-19">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={profileImage}
              width={300}
              height={300}
              alt="Profile"
              className="rounded-full shadow-xl hover:scale-105 transition-transform"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Hello, I'm Tom</h1>
              <p className="text-xl text-gray-600 mb-4">
                Third Year Student At Deakin University{" "}
              </p>
              <p className="text-white-500 max-w-2xl">
                Hello! I'm currently a third-year student at Deakin University,
                pursuing a Bachelor of Artificial Intelligence. My studies focus
                on developing innovative AI solutions and understanding the
                ethical implications of AI technologies. I'm passionate about
                leveraging AI to solve real-world problems and enhance everyday
                life.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Achievements */}
        <div className="bg-zinc-800 rounded-xl shadow-lg p-12 mb-12 fade-right">
          <h2 className="heading-2 mb-6">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "IBM Machine Learning with Python",
                date: "15 January 2025",
                icon: GrAchievement,
                description: "Complete Machine Learning course by IBM",
              },
              {
                title: "Azure AI completion certificate",
                date: "22 December 2024",
                icon: GrAchievement,
                description: "Complete Azure AI Engineer Course",
              },
              {
                title: "IBM Generative AI Engineering",
                date: "10 Feb 2024",
                icon: GrAchievement,
                description: "Tackle GenAI certificate by IBM",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow flex flex-col items-start"
              >
                {/* Render the React icon as a component */}
                <achievement.icon className="text-5xl text-gray-700 mb-4" />

                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Hobbies */}
        <section className="bg-zinc-800 rounded-xl shadow-lg p-12 fade-right">
          <h2 className="heading-2 mb-8">Hobbies & Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Gym */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/1.png"
                alt="Gym"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2">Gym</p>
            </div>

            {/* Gaming */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/gaming.jpg"
                alt="Gaming"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2">Gaming</p>
            </div>

            {/* Music */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/music.jpg"
                alt="Music"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2">Music</p>
            </div>

            {/* Photography */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/photography.jpg"
                alt="Photography"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="mt-2">Photography</p>
            </div>
          </div>
        </section>

        {/* Section 4: Quote */}
        <h2 className="heading-2">
          Quote that will always live free in my head
        </h2>
        <div className="blue-beauty rounded-xl shadow-lg p-16 mb-16 text-white text-center fade-right">
          {/* New headline */}

          <blockquote className="text-2xl italic font-light">
            "Precision is the difference between a butcher and a surgeon."
          </blockquote>
          <p className="mt-4 font-medium">- Camille</p>
        </div>
      </main>
    </div>
  );
}
