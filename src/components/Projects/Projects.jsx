import React from "react";
import { ProjectsTitle, ProjectsWrapper } from "./ProjectsStyles";
import { FaRegFileCode } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        <ProjectsTitle>
          <h2>Proyectos</h2>
          <i>
            <IoCodeSlashOutline />
          </i>
        </ProjectsTitle>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
