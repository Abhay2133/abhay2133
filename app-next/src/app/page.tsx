"use client";

import { hero_section, navLinks, projects, skills } from "@/constants/home";
import useDarkMode from "@/hooks/useDarkMode";
import { ProjectData, SkillData } from "@/types/home";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BoidsContainer from "./boids/page";

export default function Home() {
  return (
    <main>
      {/* Header and Hero Section */}
      <section className="min-h-screen w-full flex flex-col relative p3d">
        
        {/* <div className="z-0 absolute grid-bg top-0 left-0"></div> */}
        { false && <Grid /> }
        {/* <div
          style={{ backdropFilter: "blur(2px)" }}
          className="radial absolute h-full w-full top-0 left-0 z-10"
        ></div> */}
        <BoidsContainer/>
        <div
          className="absolute min-h-screen w-full flex flex-col"
          style={{ zIndex: 999 }}
        >
          <Navbar className="z-50" />
          <HeroSection className="z-50 flex-1" />
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function Grid() {
  const canvasRef = useRef(null);
  const isDarkMode = useDarkMode();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas?.getContext) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gridSize = 40; // Size of each square in the grid

    // Function to draw the grid
    function drawGrid(ctx: CanvasRenderingContext2D) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      ctx.beginPath();

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }

      ctx.strokeStyle = isDarkMode ? "#aaf" : "#005"; // Grid line color
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Call the drawGrid function to render the grid
    drawGrid(ctx);
  }, [canvasRef?.current, isDarkMode]);

  return (
    <div id="grid-container">
      <canvas
        ref={canvasRef}
        id="gridCanvas"
        width="2000"
        height="2000"
      ></canvas>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <header
      className={`flex justify-between items-center p-4 px-8 text-xl dark:bg-[#00000033] ${className}`}
    >
      <h1>ABHAY BISHT</h1>
      {/* HMBGR */}
      <div
        onClick={() => setOpen(!isOpen)}
        className="lg:hidden active:bg-gray-900 ml-auto h-[40px] w-[40px] flex flex-col justify-center items-center gap-[5px] rounded border border-gray-300"
      >
        <hr className="w-[20px] h-[3px] border-none rounded bg-gray-700" />
        <hr className="w-[20px] h-[3px] border-none rounded bg-gray-700" />
        <hr className="w-[20px] h-[3px] border-none rounded bg-gray-700" />
      </div>
      <nav className="hidden lg:flex gap-x-10">
        {navLinks.map((item: { url: string; label: string }, index: number) => (
          <a
            key={index}
            className="dark:text-gray-100 font-thin relative "
            href={item.url}
          >
            <span>{item.label}</span>
            <div className="h-[2px] rounded bg-white scale-0 transition-transform "></div>
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection({ className }: { className?: string }) {
  return (
    <section
      className={
        "flex-1 flex flex-col justify-center items-center gap-y-16 px-3" +
        " " +
        className
      }
    >
      {/* Heading */}
      <div className="flex flex-col gap-y-5">
        <h1 className="text-3xl lg:text-6xl">
          {hero_section.heading.map((item: string, index: number) => (
            <div className="text-center" key={index}>
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
      <div className="flex flex-col gap-y-5">
        <a
          href={hero_section.CTA.href}
          className="active:scale-95 text-xl px-8 transition-all font-extrabold py-3 rounded-full border-2 dark:border-gray-200 border-gray-500 hover:bg-gray-800 hover:text-gray-100 dark:hover:bg-white dark:hover:text-gray-800"
          target={hero_section.CTA.target}
        >
          {hero_section.CTA.label}
        </a>
        <a
          className="text-xl cursor-pointer [&>.bottom-line]:hover:scale-100 px-2"
          href={hero_section.subCTA.href}
          target={hero_section.subCTA.target}
        >
          <div className="px-2 mb-2">{hero_section.subCTA.label}</div>
          <div className="bottom-line transition-transform duration-500 h-[2px] w-full scale-0 dark:bg-gray-200 bg-gray-800 rounded"></div>
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-14 px-3 lg:px-24 min-h-screen" id="skills">
      <h2 className="text-4xl mb-3 text-center">Skills</h2>
      <h3 className="text-xl mb-5 text-center text-gray-800 dark:text-gray-500">
        The Technologies That Power My Projects
      </h3>
      {/* Skills Cards */}
      <div className="flex flex-wrap gap-2 lg:gap-5 justify-center ">
        {skills.map((item: SkillData, index: number) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ name, projects, time, icon }: SkillData) {
  return (
    <div className="border-2 hover:border-gray-300 border-gray-100 shadow bg-white transition-all  dark:border-transparent dark:bg-gray-800 flex p-2 rounded-xl gap-x-5 min-w-full lg:min-w-72 dark:hover:border-gray-600">
      {/* logo */}
      <div className=" flex justify-center items-center h-[90px] w-[90px] dark:bg-[#ffffff22] bg-[#00000011] rounded-lg">
        <Image
          alt={`${name}-logo`}
          src={icon.dark}
          height={60}
          width={60}
          className="hidden dark:block hover:scale-90 transition-transform"
        />
        <Image
          alt={`${name}-logo`}
          src={icon.light}
          height={60}
          width={60}
          className="dark:hidden hover:scale-90 transition-transform"
        />
      </div>
      {/* body */}
      <div className="flex flex-col">
        <div className="text-xl">{name}</div>
        <div className="text-base mt-auto mb-1 whitespace-nowrap flex items-center">
          <Image
            className="h-[20px] w-[20px] hidden dark:block"
            src="/icons/code_dark.png"
            height={20}
            width={20}
            alt="Projects Icon"
          />
          &nbsp;
          <Image
            className="h-[20px] w-[20px] dark:hidden"
            height={20}
            width={20}
            src="/icons/code_light.png"
            alt="Projects Icon"
          />
          &nbsp;
          {projects} Projects
        </div>
        <div className="text-base whitespace-nowrap flex items-center">
          <Image
            className="h-[20px] w-[20px] hidden dark:block"
            height={20}
            width={20}
            src="/icons/timer_dark.png"
            alt="Projects Icon"
          />
          &nbsp;
          <Image
            className="h-[20px] w-[20px] dark:hidden"
            src="/icons/timer_light.png"
            height={20}
            width={20}
            alt="Projects Icon"
          />
          &nbsp;
          {time}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="pt-5 pb-20 min-h-screen md:px-10">
      <h2 className="text-4xl text-center mb-3">Projects</h2>
      <h3 className="text-xl text-center text-gray-800 dark:text-gray-500">
        Creative Solutions and Achievements
      </h3>
      {/* Projects List */}
      <div className="mt-5 flex gap-5 px-3 lg:px-10 flex-wrap  justify-center">
        {projects.map((project: ProjectData, i: number) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ name, version, skills }: ProjectData) {
  return (
    <div
      className={`shadow-md md:max-w-[250px] 
    w-full h-[310px] gap-2 border-gray-300 
    dark:border-gray-800 bg-gray-100 transition 
    dark:bg-gray-800 rounded-lg flex flex-col border  
    hover:shadow-lg hover:scale-105 
    hover:dark:border-gray-500 p-2`}
    >
      <div className="h-full cursor-pointer rounded bg-gray-500 w-full "></div>
      {/* name and version */}
      <div className="flex mt-1 ml-3 mr-2 justify-between">
        <div className="text-lg cursor-pointer">{name}</div>
        <div className="text-gray-500 cursor-pointer">{version}</div>
      </div>
      {/* Skills */}
      <div className="flex px-2 gap-2 overflow-x-auto h-[50px] no-scrollbar">
        {skills.map((label: string, i: number) => (
          <div
            key={i}
            className="whitespace-nowrap cursor-pointer px-3 dark:text-gray-400 py-1 rounded-full border dark:border-gray-600 border-gray-400 hover:dark:bg-gray-900 hover:bg-gray-200"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="dark:bg-gray-900 bg-gray-100 py-12">
      <h2 className="text-3xl font-semibold text-center mb-3">Contact Me</h2>
      <p className="text-center text-gray-600 mb-8 px-5">
        Feel free to reach out through any of the platforms below:
      </p>
      <div className="flex justify-center space-x-8">
        {/* <!-- Gmail --> */}
        <a
          href="mailto:abhaybishthestudent@gmail.com"
          target="_blank"
          className="transform hover:scale-110 transition"
        >
          <img src="/icons/mail.png" alt="Gmail" className="w-10 h-10" />
        </a>
        {/* <!-- LinkedIn --> */}
        <a
          href="https://www.linkedin.com/in/abhay-21m"
          target="_blank"
          className="transform hover:scale-110 transition"
        >
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
        </a>
        {/* <!-- GitHub --> */}
        <a
          href="https://github.com/abhay2133"
          target="_blank"
          className="transform hover:scale-110 transition"
        >
          <img src="/icons/github.png" alt="GitHub" className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
}
