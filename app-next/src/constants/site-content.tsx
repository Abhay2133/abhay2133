import { $, scrollTo } from "@/lib/hlpr";
import { ProjectData, SkillData } from "@/types/home";
import { BugIcon, Code2, Download, FilesIcon, HeadsetIcon, HomeIcon, Rss } from "lucide-react";

export const navLinks = [
  {
    icon: <HomeIcon size={16} />,
    label: "Home",
    url: "#",
    onClick() {
      scrollTo($("#hero"));
    },
  },
  {
    icon: <Code2 size={16} />,
    label: "Skills",
    onClick() {
      scrollTo($("#skills"), 100);
    },
  },
  {
    icon: <FilesIcon size={16} />,
    label: "Projects",
    onClick() {
      scrollTo($("#projects"), 100);
    },
  },
  {
    icon: <BugIcon size={16} />,
    label: "Experience",
    onClick() {},
  },
  {
    icon: <Rss size={16} />,
    label: "Blog",
    onClick() {
      window.open("/blog");
    },
  },
  {
    icon: <HeadsetIcon size={16} />,
    label: "Contact",
    onClick() {
      scrollTo($("#contact"));
    },
  },
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
    icon: { dark: "/icons/ruby.png", light: "/icons/ruby.png" },
    name: "Ruby",
    projects: 10,
    time: "9+ months",
  },
  {
    icon: { dark: "/icons/rails.png", light: "/icons/rails.png" },
    name: "Rails",
    projects: 10,
    time: "9+ months",
  },
  {
    icon: { dark: "/icons/vue.png", light: "/icons/vue.png" },
    name: "VueJS",
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
    link: "/blog",
    github: "",
    image: "/images/blog.jpg",
  },
  {
    name: "OpenChat",
    version: "1.0.5",
    icon: { light: "", dark: "" },
    description: "A real-time chat application for one-on-one conversations.",
    github: "https://github.com/Abhay2132/openchat",
    image: "/images/openchat.jpg",
  },
  {
    name: "CampusCue",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "A campus-wide communication and notification platform.",
    github: "https://github.com/Abhay2133/campuscue",
    image: "/images/campuscue.jpg",
  },
  {
    name: "HotQuiz",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "An engaging quiz app with hot seat style competition.",
    github: "https://github.com/Abhay2132/quiz_app",
    image: "/images/hotquiz.jpg",
  },
  {
    name: "Quiz Bowl",
    version: "0.2.4",
    icon: { light: "", dark: "" },
    description: "A team-based quiz competition system for college events.",
    github: "https://github.com/Abhay2133/quiz_bowl",
    image: "/images/quizbowl.jpg",
  },
];
