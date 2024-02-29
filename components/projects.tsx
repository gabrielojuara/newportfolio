"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {project.title === "Rentwheels" && (
              <a
                href="https://car-rent-pgal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Project {...project} />
              </a>
            )}
            {project.title === "Mechanical portfolio" && (
              <a
                href="https://portfolio-mecanico.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Project {...project} />
              </a>
            )}
            {project.title === "Weather forecast" && (
              <a
                href="https://github.com/gabrielojuara/previsao-tempo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Project {...project} />
              </a>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
