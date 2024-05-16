import React from "react";
import GyF from "../../assets/gestion-empresarial.png";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {
  LinkProjects,
  ProjectCard,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardLinks,
  ProjectCardTools,
} from "./CardProjectStyles";
import Tools from "../Tools/Tools";

const CardProject = () => {
  const tools = Tools();
  const toolsFiltradas = tools.filter(
    (tool) => tool.id === 3 || tool.id === 4 || tool.id === 6
  );

  return (
    <ProjectCard>
      <ProjectCardImage>
        <img src={GyF} alt="Foto del proyecto G&F" />
      </ProjectCardImage>
      <ProjectCardDescription>
        <h4>G&F</h4>
        <p>
          Pagina creada para la empresa <span>G&F</span>, dedicada a la gestion
          empresarial.
        </p>
        <ProjectCardTools>
          {toolsFiltradas.map((tool) => (
            <img key={tool.id} src={tool.img} alt={tool.alt} />
          ))}
        </ProjectCardTools>
        <ProjectCardLinks>
          <LinkProjects href="https://gyf-projetct.vercel.app/" target="_blank">
            <i className="arrow">
              <BsBoxArrowInUpRight />
            </i>
            Live
          </LinkProjects>
          <LinkProjects href="https://github.com/fdirg/GyF" target="_blank">
            <i>
              <FaGithub />
            </i>
            Codigo
          </LinkProjects>
        </ProjectCardLinks>
      </ProjectCardDescription>
    </ProjectCard>
  );
};

export default CardProject;
