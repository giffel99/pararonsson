"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { about, education, experience, skills, projects } from "@/data";
import { Mail, Linkedin } from "lucide-react";
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
            <a href="#contact" className="hover:underline">
              Contact
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
          <p className="leading-relaxed">{about.text}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/profile_image.jpg"
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
          {education.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <div className="font-semibold">{item.school}</div>
              <div className="text-sm text-gray-600">
                {item.degree}, {item.years}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-6">Experience</h3>
        <div className="space-y-6">
          {experience.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <div className="font-semibold text-lg">{item.company}</div>
              <div className="text-sm text-gray-600">
                {item.role}, {item.location} — {item.period}
              </div>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>

        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-semibold mb-3">Frontend</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.frontend.map((skill: string) => (
                <div
                  key={skill}
                  className="border rounded-xl p-3 shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Backend / Cloud</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.backend.map((skill: string) => (
                <div
                  key={skill}
                  className="border rounded-xl p-3 shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">AI / Data Science</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.ai.map((skill: string) => (
                <div
                  key={skill}
                  className="border rounded-xl p-3 shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Other</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.other.map((skill: string) => (
                <div
                  key={skill}
                  className="border rounded-xl p-3 shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
        <h3 className="text-3xl font-bold mb-10 text-center">My Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.image}
                alt="Project"
                width={600}
                height={400}
                unoptimized={true}
              />
              <div className="p-4 font-medium">{item.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto py-20 px-4 text-center"
      >
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="text-gray-700 mb-4">Feel free to reach out to me:</p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:per.aronsson99@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 underline transition"
          >
            <Mail size={20} /> per.aronsson99@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/p%C3%A4r-aronsson-a0220817b/"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 underline transition"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}
