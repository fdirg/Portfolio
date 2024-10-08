﻿import React from "react";
import GyF from "../../assets/gestion-empresarial.png";
import expense from "../../assets/expense.png";
import qlik1 from "../../assets/visualizacion_de_ventas_1.jpg";
import mbtc from "../../assets/mbtc.png";
import ba from "../../assets/ba.png";
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
import { analystTools, devTools } from "../Tools/Tools";

const CardProject = () => {
  const dataTools = analystTools();
  const contosoTool = dataTools.filter((tool) => tool.id === 4);
  const anacTools = dataTools.filter((tool) => tool.id === 1 || tool.id === 5);

  const frontTools = devTools();
  const frontToolsFiltradas = frontTools.filter(
    (tool) => tool.id === 3 || tool.id === 4 || tool.id === 6
  );

  return (
    <>
      <ProjectCard>
        <ProjectCardImage>
          <img src={mbtc} alt="Foto proyecto MBTB" />
        </ProjectCardImage>
        <ProjectCardDescription>
          <h4>Analisis MiBiciTuBici</h4>
          <p>
            Análisis realizado con los datos proporcionados por la Municipalidad
            de Rosario sobre el sistema publico MiBiciTuBici. ETL con Python
            (Pandas, Matplotlib) y dashboard con Power BI.
          </p>
          <ProjectCardTools>
            {anacTools.map((tool) => (
              <img key={tool.id} src={tool.img} alt={tool.alt} />
            ))}
          </ProjectCardTools>
          <ProjectCardLinks>
            <LinkProjects
              href="https://github.com/fdirg/Proyecto_MiBiciTuBici_Dataset"
              target="_blank"
            >
              <i>
                <FaGithub />
              </i>
              Codigo
            </LinkProjects>
          </ProjectCardLinks>
        </ProjectCardDescription>
      </ProjectCard>

      <ProjectCard>
        <ProjectCardImage>
          <img src={ba} alt="Foto proyecto ANAC" />
        </ProjectCardImage>
        <ProjectCardDescription>
          <h4>Analisis delitos CABA</h4>
          <p>
            Análisis realizado con los datos proporcionados por la Ciudad de
            Buenos Aires sobre la cantidad de delitos entre 2018 y 2023.
            Realizado con QlikSense, desde principio a fin.
          </p>
          <ProjectCardTools>
            {contosoTool.map((tool) => (
              <img key={tool.id} src={tool.img} alt={tool.alt} />
            ))}
          </ProjectCardTools>
          <ProjectCardLinks>
            <LinkProjects
              href="https://github.com/fdirg/Proyecto_Final_Jupi_Digital/tree/main"
              target="_blank"
            >
              <i>
                <FaGithub />
              </i>
              Codigo
            </LinkProjects>
          </ProjectCardLinks>
        </ProjectCardDescription>
      </ProjectCard>

      <ProjectCard>
        <ProjectCardImage>
          <img src={qlik1} alt="Foto proyecto Qlik" />
        </ProjectCardImage>
        <ProjectCardDescription>
          <h4>Contoso - Qlik sense</h4>
          <p>Proyecto contoso realizado con Qlik Sense. ETL y Dashboard.</p>
          <ProjectCardTools>
            {contosoTool.map((tool) => (
              <img key={tool.id} src={tool.img} alt={tool.alt} />
            ))}
          </ProjectCardTools>
          <ProjectCardLinks>
            <LinkProjects
              href="https://github.com/fdirg/Proyecto_QlikSense"
              target="_blank"
            >
              <i>
                <FaGithub />
              </i>
              Codigo
            </LinkProjects>
          </ProjectCardLinks>
        </ProjectCardDescription>
      </ProjectCard>

      <ProjectCard>
        <ProjectCardImage>
          <img src={GyF} alt="Foto del proyecto G&F" />
        </ProjectCardImage>
        <ProjectCardDescription>
          <h4>G&F</h4>
          <p>
            Pagina creada para la empresa <span>G&F</span>, dedicada a la
            gestion empresarial.
          </p>
          <ProjectCardTools>
            {frontToolsFiltradas.map((tool) => (
              <img key={tool.id} src={tool.img} alt={tool.alt} />
            ))}
          </ProjectCardTools>
          <ProjectCardLinks>
            <LinkProjects
              href="https://gyf-projetct.vercel.app/"
              target="_blank"
            >
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

      <ProjectCard>
        <ProjectCardImage>
          <img src={expense} alt="Foto del proyecto G&F" />
        </ProjectCardImage>
        <ProjectCardDescription>
          <h4>Expense Tracker</h4>
          <p>Proyecto personal, utilizando Context API y React Hooks.</p>
          <ProjectCardTools>
            {frontToolsFiltradas.map((tool) => (
              <img key={tool.id} src={tool.img} alt={tool.alt} />
            ))}
          </ProjectCardTools>
          <ProjectCardLinks>
            <LinkProjects
              href="https://expense-tracker-phi-azure.vercel.app/"
              target="_blank"
            >
              <i className="arrow">
                <BsBoxArrowInUpRight />
              </i>
              Live
            </LinkProjects>
            <LinkProjects
              href="https://github.com/fdirg/Expense-Tracker"
              target="_blank"
            >
              <i>
                <FaGithub />
              </i>
              Codigo
            </LinkProjects>
          </ProjectCardLinks>
        </ProjectCardDescription>
      </ProjectCard>
    </>
  );
};

export default CardProject;
