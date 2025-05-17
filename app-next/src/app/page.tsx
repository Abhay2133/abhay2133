"use client";

import { hero_section, navLinks, projects, skills } from "@/constants/site-content";
import { ProjectData, SkillData } from "@/types/home";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useState } from "react";
import BoidsContainer from "./boids/page";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  // const { theme, setTheme } = useTheme()

  return (
    <main>
      <Navbar />
      {/* Header and Hero Section */}
      <section className="p3d relative flex min-h-screen w-full flex-col">
        <BoidsContainer />
        <div className="absolute flex min-h-screen w-full flex-col pt-[90px]" style={{ zIndex: 999 }}>
          <HeroSection className="z-10 flex-1" />
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={`no-scrollbar z-max fixed flex w-full items-center gap-3 overflow-auto bg-[#ffffffdd] p-4 px-8 text-xl dark:bg-[#000000aa] ${className} border-b dark:border-gray-700`}>
      <ThemeToggle />
      {/* HMBGR */}
      {/* <div onClick={() => setOpen(!isOpen)} className="ml-auto flex h-[40px] w-[40px] flex-col items-center justify-center gap-[5px] rounded border border-gray-300 active:bg-gray-900 md:hidden">
        <hr className="h-[3px] w-[20px] rounded border-none bg-gray-700" />
        <hr className="h-[3px] w-[20px] rounded border-none bg-gray-700" />
        <hr className="h-[3px] w-[20px] rounded border-none bg-gray-700" />
      </div> */}
      <nav className="no-scrollbar ml-auto flex gap-x-10 overflow-auto pl-10 pr-3">
        {navLinks.map((item: { url: string; label: string; icon: JSX.Element }, index: number) => (
          <a key={index} className="relative font-thin dark:text-gray-100" href={item.url}>
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {/* <div className="bottom-line"></div> */}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection({ className }: { className?: string }) {
  return (
    <section className={"flex flex-1 flex-col items-center justify-center gap-y-16 px-3" + " " + className}>
      {/* Heading */}
      <div className="flex flex-col gap-y-5">
        <h1 className="text-3xl lg:text-6xl">
          {hero_section.heading.map((item: string, index: number) => (
            <div className="text-primary text-center" key={index}>
              {item}
            </div>
          ))}
        </h1>
        <h2 className="text-lg lg:text-2xl">
          {hero_section.subheading.map((item: string, index: number) => (
            <div className="text-center" key={index}>
              {item}
            </div>
          ))}
        </h2>
      </div>
      {/* CTA */}
      <div className="flex flex-col items-center gap-y-5">
        <a
          href={hero_section.CTA.href}
          className="text-primary duration-500 rounded-full border-2 border-gray-500 px-8 py-3 text-xl font-extrabold transition-all hover:bg-gray-800 hover:text-gray-100 active:scale-95 dark:border-gray-200 dark:hover:bg-white dark:hover:text-gray-800"
          target={hero_section.CTA.target}
        >
          {hero_section.CTA.label}
        </a>
        <a className="w-min cursor-pointer px-4 text-xl" href={hero_section.subCTA.href} target={hero_section.subCTA.target}>
          <div className="mb-2 flex items-center justify-center gap-4 px-2">{hero_section.subCTA.label}</div>
          <div className="bottom-line"></div>
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="min-h-screen px-3 py-14 lg:px-24" id="skills">
      <h2 className="mb-3 text-center text-4xl">Skills</h2>
      <h3 className="mb-5 text-center text-xl text-gray-800 dark:text-gray-500">The Technologies That Power My Projects</h3>
      {/* Skills Cards */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-5">
        {skills.map((item: SkillData, index: number) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ name, projects, time, icon }: SkillData) {
  return (
    <div className="flex min-w-full gap-x-5 rounded-xl border-2 border-gray-100 bg-white p-2 shadow transition-all hover:border-gray-300 lg:min-w-72 dark:border-transparent dark:bg-gray-800 dark:hover:border-gray-600">
      {/* logo */}
      <div className="flex h-[90px] w-[90px] items-center justify-center rounded-lg bg-[#00000011] dark:bg-[#ffffff22]">
        <Image alt={`${name}-logo`} src={icon.dark} height={60} width={60} className="hidden transition-transform hover:scale-90 dark:block" />
        <Image alt={`${name}-logo`} src={icon.light} height={60} width={60} className="transition-transform hover:scale-90 dark:hidden" />
      </div>
      {/* body */}
      <div className="flex flex-col">
        <div className="text-xl">{name}</div>
        <div className="mb-1 mt-auto flex items-center whitespace-nowrap text-base">
          <Image className="hidden h-[20px] w-[20px] dark:block" src="/icons/code_dark.png" height={20} width={20} alt="Projects Icon" />
          &nbsp;
          <Image className="h-[20px] w-[20px] dark:hidden" height={20} width={20} src="/icons/code_light.png" alt="Projects Icon" />
          &nbsp;
          {projects} Projects
        </div>
        <div className="flex items-center whitespace-nowrap text-base">
          <Image className="hidden h-[20px] w-[20px] dark:block" height={20} width={20} src="/icons/timer_dark.png" alt="Projects Icon" />
          &nbsp;
          <Image className="h-[20px] w-[20px] dark:hidden" src="/icons/timer_light.png" height={20} width={20} alt="Projects Icon" />
          &nbsp;
          {time}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section heading="Projects" subheading="Creative Solutions and Achievements">
      <div className="mt-5 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-32">
        {projects.map((project: ProjectData, i: number) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ name, version, description }: ProjectData) {
  return (
    <div
      className={`flex h-[310px] flex-col overflow-hidden rounded-lg border-2 border-gray-300 bg-gray-50 shadow-md transition hover:scale-105 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800 hover:dark:border-blue-500 dark:hover:shadow-gray-700`}
    >
      <div className="h-[200px] w-full dark:bg-gray-500 bg-gray-200"></div>

      <div className="box-border h-[110px] p-3">
        <div className="mt-1 flex justify-between">
          <div className="text-lg">{name}</div>
          <div className="text-gray-500">{version}</div>
        </div>

        <div className="mt-2 line-clamp-2 text-gray-500">{description}</div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-12 dark:bg-gray-900">
      <h2 className="mb-3 text-center text-3xl font-semibold">Contact Me</h2>
      <p className="mb-8 px-5 text-center text-gray-600">Feel free to reach out through any of the platforms below:</p>
      <div className="flex justify-center space-x-8">
        {/* <!-- Gmail --> */}
        <a href="mailto:abhaybishthestudent@gmail.com" target="_blank" className="transform transition hover:scale-110">
          <img src="/icons/mail.png" alt="Gmail" className="h-10 w-10" />
        </a>
        {/* <!-- LinkedIn --> */}
        <a href="https://www.linkedin.com/in/abhay-21m" target="_blank" className="transform transition hover:scale-110">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="h-10 w-10" />
        </a>
        {/* <!-- GitHub --> */}
        <a href="https://github.com/abhay2133" target="_blank" className="transform transition hover:scale-110">
          <img src="/icons/github.png" alt="GitHub" className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
}

function Section({ children, heading, subheading = "" }: PropsWithChildren & { heading: string; subheading?: string }) {
  return (
    <section id="projects" className="min-h-screen px-4 pb-20 pt-5 md:px-10">
      <h2 className="mb-3 text-center text-4xl">{heading}</h2>
      <h3 className="text-center text-xl text-gray-800 dark:text-gray-500">{subheading}</h3>
      {children}
    </section>
  );
}
