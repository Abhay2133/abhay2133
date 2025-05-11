import { ProjectData, SkillData } from "@/types/home";

export const navLinks = [
  { label: "Home", url: "#" },
  { label: "Skills", url: "#skills" },
  { label: "Projects", url: "#projects" },
  { label: "Experience", url: "#experience" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "#contact" },
];

export const hero_section = {
  heading: ["Hi, I'm Abhay Bisht", "a Full Stack Developer"],
  subheading: [
    "Experienced in React, Node.js, and PostgreSQL",
    "creating impactful digital experiences",
  ],
  CTA: { label: "View My Work", href: "#projects", target: "_self" },
  subCTA: { label: "Download Resume", href: "/resumes/Resume_BackEnd.pdf", target: "_blank" },
};

export const skills: SkillData[] = [
  {
    icon: { dark: "/icons/react_dark.svg", light: "/icons/react_light.svg" },
    name: "React",
    projects: 10,
    time: "9+ months",
  },
  {
    icon: { dark: "/icons/nextjs.png", light: "/icons/nextjs.png" },
    name: "NextJS",
    projects: 4,
    time: "6+ months",
  },
  {
    icon: { dark: "/icons/python.png", light: "/icons/python.png" },
    name: "Python",
    projects: 5,
    time: "13+ months",
  },
  {
    icon: { dark: "/icons/postgres.png", light: "/icons/postgres.png" },
    name: "PostgreSQL",
    projects: 3,
    time: "6+ months",
  },
  {
    icon: { dark: "/icons/prisma.png", light: "/icons/prisma.png" },
    name: "Prisma",
    projects: 2,
    time: "4+ months",
  },
  {
    icon: { dark: "/icons/nodejs.png", light: "/icons/nodejs.png" },
    name: "Node.js",
    projects: 6,
    time: "8+ months",
  },
  {
    icon: { dark: "/icons/typescript.png", light: "/icons/typescript.png" },
    name: "TypeScript",
    projects: 5,
    time: "6+ months",
  },
  {
    icon: {
      dark: "/icons/express_dark.png",
      light: "/icons/express_light.png",
    },
    name: "Express.js",
    projects: 4,
    time: "7+ months",
  },
  {
    icon: { dark: "/icons/mongodb.png", light: "/icons/mongodb.png" },
    name: "MongoDB",
    projects: 3,
    time: "6+ months",
  },
  {
    icon: { dark: "/icons/expo_dark.png", light: "/icons/expo_light.png" },
    name: "Expo",
    projects: 3,
    time: "5+ months",
  },
  {
    icon: { dark: "/icons/ffmpeg.png", light: "/icons/ffmpeg.png" },
    name: "FFmpeg",
    projects: 1,
    time: "3+ months",
  },
];

export const projects: ProjectData[] = [
  {
    name: "Blog",
    version: "0.0.1",
    skills: ["react", "nextjs", "monogdb"],
    icon: { light: "", dark: "" },
  },
  // {name:"YouTube Downloader", version:"0.1.2", skills:["react", "nodejs", "ytdl"], icon:{light:"", dark:""}},
  {
    name: "OpenChat",
    version: "1.0.5",
    skills: ["react", "express", "mongodb", "websocket"],
    icon: { light: "", dark: "" },
  },
  {
    name: "CampusCue",
    version: "0.2.4",
    skills: ["react", "nextjs", "monogdb"],
    icon: { light: "", dark: "" },
  },
  {
    name: "HotQuiz",
    version: "0.2.4",
    skills: ["python3", "custom-tkinter", "socket"],
    icon: { light: "", dark: "" },
  },
  // {name:"Mute Mate", version:"0.2.4", skills:["flutter", "firebase", "android"], icon:{light:"", dark:""}},
  {
    name: "Quiz Bowl",
    version: "0.2.4",
    skills: ["nextjs", "postgres", "react"],
    icon: { light: "", dark: "" },
  },
];
