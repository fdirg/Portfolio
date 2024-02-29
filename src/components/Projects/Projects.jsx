import React from "react";
import {
  ProjectCard,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardLinks,
  ProjectCardTools,
  ProjectsCardsWrapper,
  ProjectsTitle,
  ProjectsWrapper,
} from "./ProjectsStyles";
import { IoCodeSlashOutline } from "react-icons/io5";
import GyF from "../../assets/gestion-empresarial.png";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Tools from "../Tools/Tools";

const Projects = () => {
  const tools = Tools();
  const toolsFiltradas = tools.filter(
    (tool) => tool.id === 3 || tool.id === 4 || tool.id === 6
  );

  return (
    <>
      <ProjectsWrapper>
        <ProjectsTitle>
          <h2>Proyectos</h2>
          <i>
            <IoCodeSlashOutline />
          </i>
        </ProjectsTitle>
        <ProjectsCardsWrapper>
          <ProjectCard>
            <ProjectCardImage>
              <img src={GyF} alt="Foto del proyecto G&F" />
            </ProjectCardImage>
            <ProjectCardDescription>
              <h4>G&F</h4>
              <p>
                Pagina creada para la empresa G&F, dedicada a la gestion
                empresarial.
              </p>
              <ProjectCardTools>
                {toolsFiltradas.map((tool) => (
                  <img key={tool.id} src={tool.img} alt={tool.alt} />
                ))}
              </ProjectCardTools>
              <ProjectCardLinks>
                <a href="https://gyf-projetct.vercel.app/" target="_blank">
                  <i>
                    <IoLogoVercel />
                  </i>
                  Live
                </a>
                <a href="https://github.com/fdirg/GyF" target="_blank">
                  <i>
                    <FaGithub />
                  </i>
                  Codigo
                </a>
              </ProjectCardLinks>
            </ProjectCardDescription>
          </ProjectCard>
        </ProjectsCardsWrapper>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
