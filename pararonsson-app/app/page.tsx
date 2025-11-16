"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4 text-sm font-medium">
          <div className="font-bold text-lg">Pär Aronsson</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#education" className="hover:underline">
              Education
            </a>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Hi, my name is Pär Aronsson
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-gray-600"
        >
          I am a software developer
        </motion.h2>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="leading-relaxed">
            I am a bla bla. Write a short summary here about your passion for
            programming, interests, and why you enjoy building software.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://placehold.co/200x200"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-xl shadow"
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-6">Education</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <div className="font-semibold">
                Chalmers University of Technology
              </div>
              <div className="text-sm text-gray-600">
                Civilingenjör, Informationsteknik (2018 – 2024)
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-6">Experience</h3>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <div className="font-semibold text-lg">Infotiv</div>
              <div className="text-sm text-gray-600">
                Software Developer, Gothenburg SE — Feb 2025 – Now
              </div>
              <p className="mt-2 text-gray-700">
                Description text... Describe responsibilities, tech stack,
                achievements.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "C++",
            "Python",
            "Git",
            "Docker",
          ].map((skill) => (
            <div key={skill} className="border rounded-xl p-4 shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-10 text-center">My Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link
              href={`/projects/${i + 1}`}
              key={i}
              className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src="https://placehold.co/600x400"
                alt="Project"
                width={600}
                height={400}
              />
              <div className="p-4 font-medium">Project {i + 1}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

/*

header: placeholder with links that scrolls down: "about me", "education", "experience", "projects" 
title: Hi my name is Pär Aronsson
sub title: I am a software developer

grid view:
row1:
col 1: About me... I am a bla bla
col 2: https://placehold.co/200x200
row2:
Bold: Education
subtable:
chalmers, Civilingenjör, Informationsteknik 2018 – 2024...
chalmers, Civilingenjör, Informationsteknik 2018 – 2024...
chalmers, Civilingenjör, Informationsteknik 2018 – 2024...
row2 Experience
subtable:
Infotiv, Software developer, Gothenburg SE, feb 2025 - Now
Description text....
Infotiv, Software developer, Gothenburg SE, feb 2025 - Now
Description text....
Infotiv, Software developer, Gothenburg SE, feb 2025 - Now
Description text.... 
row 3 skills:

Scroll down to new view: My projects:
*grid of 6xN squares with place holder images that has a placeholder image and clicks to other pages. acts as a link 
*/
