"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About", 0.5); 

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After 2 years majoring in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I decided
        to migrate and pursue my passion for programming, delving into the
        latest technologies of{" "}
        <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">
          For me, the user experience and the problem-solving aspects
        </span>{" "}
        are the rewarding parts of programming. I{" "}
        <span className="underline">thrive</span> on the satisfaction of
        creating transformative experiences for users. My core stack includes{" "}
        <span className="font-medium">
          React (Next.js), Typescript, and Javascript
        </span>
        . I am also familiar with NodeJs, API's and TailwindCSS. Continuously
        seeking to enhance my skills I am always eager to learn new
        technologies. Currently, I am seeking for a{" "}
        <span className="font-medium">full-time position</span> as a Junior
        Software/Web Developer.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing
        racing video games, electric guitar, and mountain biking. Additionally,
        i have{" "}
        <span className="font-medium">
          keen interest in exploring new places and languages
        </span>
        , with my current focus on learning Japanese.{" "}
      </p>
    </motion.section>
  );
}
