import { ProjectData, SkillData } from "@/types/home";
import { BugIcon, Code2, Download, FilesIcon, HeadsetIcon, HomeIcon, Rss } from "lucide-react";

export const navLinks = [
  { icon: <HomeIcon size={20} />, label: "Home", url: "#" },
  { icon: <Code2 size={20} />, label: "Skills", url: "#skills" },
  { icon: <FilesIcon size={20} />, label: "Projects", url: "#projects" },
  { icon: <BugIcon size={20} />, label: "Experience", url: "#experience" },
  { icon: <Rss size={20} />, label: "Blog", url: "/blog" },
  { icon: <HeadsetIcon size={20} />, label: "Contact", url: "#contact" },
];

export const hero_section = {
  heading: ["Hi, I'm Abhay Bisht", "a Full Stack Developer"],
  subheading: ["Experienced in React, Node.js, and PostgreSQL", "creating impactful digital experiences"],
  CTA: { label: "View My Work", href: "#projects", target: "_self" },
  subCTA: {
    label: (
      <>
        <Download size={20} /> Resume
      </>
    ),
    href: "/resumes/Resume_Abhay-Bisht.pdf",
    target: "_blank",
  },
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
    icon: { light: "", dark: "" },
    description: "A simple blogging platform to publish and manage articles.",
  },
  {
    name: "OpenChat",
    version: "1.0.5",
    icon: { light: "", dark: "" },
    description: "A real-time chat application for one-on-one conversations.",
  },
  {
    name: "CampusCue",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "A campus-wide communication and notification platform.",
  },
  {
    name: "HotQuiz",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "An engaging quiz app with hot seat style competition.",
  },
  {
    name: "Quiz Bowl",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "A team-based quiz competition system for college events.",
  },
];
