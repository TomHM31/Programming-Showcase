import Image from "next/image";
import profileImage from "../images/1.png";
// import achievement1 from "../images/achievement1.png";
// import achievement2 from "../images/achievement2.png";
// import achievement3 from "../images/achievement3.png";
import logo from "../images/logo.jpg";
import Header from "../components/header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-mono">
      <Header />
      <main className="max-w-7xl mx-auto space-y-16 py-12 mt-24">
        {/* Section 1: Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-12 fade-left mt-19">
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
              <p className="text-gray-500 max-w-2xl">
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
        <div className="bg-white rounded-xl shadow-lg p-12 mb-12 fade-right">
          <h2 className="heading-2">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Achievement 1",
                date: "January 2024",
                image: logo,
                description: "Description of achievement 1",
              },
              {
                title: "Achievement 2",
                date: "March 2024",
                image: logo,
                description: "Description of achievement 2",
              },
              {
                title: "Achievement 3",
                date: "May 2024",
                image: logo,
                description: "Description of achievement 3",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Image
                  src={logo}
                  alt={achievement.title}
                  className="profile-image"
                />
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Skills */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16 slide-top">
          <h2 className="heading-1">Skills</h2>
          <div className="space-y-6">
            {[
              { name: "Skill 1", level: 90, color: "#3B82F6" },
              { name: "Skill 2", level: 85, color: "#8B5CF6" },
              { name: "Skill 3", level: 85, color: "#06B6D4" },
              { name: "Skill 4", level: 95, color: "#6366F1" },
            ].map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2 rounded-full animate-bounce">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Quote */}
        <div className="blue-beauty rounded-xl shadow-lg p-16 mb-16 text-white text-center fade-right">
          <blockquote className="text-2xl italic font-light">
            "Precision is the difference between a butcher and a surgeon."
          </blockquote>
          <p className="mt-4 font-medium">- Your Name</p>
        </div>
      </main>
    </div>
  );
}
