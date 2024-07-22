import React from "react";
import {
  ProjectsCardsWrapper,
  ProjectsTitle,
  ProjectsWrapper,
} from "./ProjectsStyles";
import { IoCodeSlashOutline } from "react-icons/io5";
import CardProject from "../CardProject/CardProject";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper id="proyectos">
        <ProjectsTitle>
          <h2>Proyectos</h2>
          <i>
            <IoCodeSlashOutline />
          </i>
        </ProjectsTitle>
        <ProjectsCardsWrapper>
          <CardProject />
        </ProjectsCardsWrapper>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
