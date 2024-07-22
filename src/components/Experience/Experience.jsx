import React from "react";
import {
  ExperienceCard,
  ExperienceCardsWrapper,
  ExperienceDescription,
  ExperienceTitle,
  ExperienceWrapper,
} from "./ExperienceStyles";

const Experience = () => {
  return (
    <>
      <ExperienceWrapper>
        <ExperienceTitle>
          <h2>Experiencia Laboral</h2>
        </ExperienceTitle>
        <ExperienceCardsWrapper>
          <ExperienceCard>
            <ExperienceDescription id="experiencia">
              <h3>Fotografo Inmobiliario - Expertias Inmobiliaria</h3>
              <span style={{ fontSize: "12px" }}>2021 - Act.</span>
              <ul>
                <li>
                  <span>
                    Gestion del tiempo y proyectos fotograficos, edicion y
                    entrega de imagenes a clientes.
                  </span>
                </li>
              </ul>
            </ExperienceDescription>
          </ExperienceCard>
        </ExperienceCardsWrapper>
      </ExperienceWrapper>
    </>
  );
};

export default Experience;
