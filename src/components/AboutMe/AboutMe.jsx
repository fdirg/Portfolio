import React from "react";
import {
  AboutMeDescription,
  AboutMeTitle,
  AboutMeWrapper,
} from "./AboutMeStyles";
import { FaRegHand } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <>
      <AboutMeWrapper id="aboutMe">
        <AboutMeTitle>
          <h2>Sobre mi</h2>
          <i>
            <FaRegHand />
          </i>
        </AboutMeTitle>
        <AboutMeDescription>
          <p>
            👋¡Buenas! Soy estudiante avanzado en la Tecnicatura de Programación
            en la Universidad Tecnológica Nacional de Rosario, enfocado en el
            Análisis de datos.
          </p>
          <p>
            Me motiva el conocimiento de herramientas nuevas, asi como la
            especialización y perfección en aquellas que ya manejo, teniendo la
            habilidad de aprendizaje rápido.
          </p>
          <p>
            🧠Poseo un buen pensamiento critico, como también capacidad
            analitica, atencion al detalle y gestion del tiempo. Adaptabilidad y
            resolutivo antes problemas.
          </p>
          <p>
            Busco un continuo crecimiento profesional, aplicar y expandir mis
            conocimientos y contribuir al éxito de un equipo.
          </p>
        </AboutMeDescription>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
