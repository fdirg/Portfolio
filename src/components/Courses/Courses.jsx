import React from "react";
import {
  CoursesCard,
  CoursesCardsWrapper,
  CoursesDescription,
  CoursesTitle,
  CoursesWrapper,
} from "./CoursesStyles";

const Courses = () => {
  return (
    <>
      <CoursesWrapper>
        <CoursesTitle>
          <h2>Cursos</h2>
        </CoursesTitle>
        <CoursesCardsWrapper>
          <CoursesCard>
            <CoursesDescription>
              <h3>Google Data Analytics Professional Certificate</h3>
              <span style={{ fontSize: "12px" }}>Jun 2024 - Act.</span>
              <ul>
                <li>
                  <span>Modelizacion de datos con Microsoft Excel, SQL.</span>
                </li>
                <li>
                  <span>
                    Visualizacion de datos con Microsoft Excel, Tableau.
                  </span>
                </li>
              </ul>
            </CoursesDescription>
          </CoursesCard>

          <CoursesCard>
            <CoursesDescription>
              <h3>Bootcamp en Analisis de Datos - Jupi Digital</h3>
              <span style={{ fontSize: "12px" }}>Abr 2024 - Ago 2024</span>
              <ul>
                <li>
                  <span>
                    Transformacion de datos con Qlik Sense, Power BI y SQL
                    (Snowflake).
                  </span>
                </li>
                <li>
                  <span>
                    Creacion de dashboards interactivos con Qlik Sense y Power
                    BI.
                  </span>
                </li>
                <li>
                  <span>Habilidades blandas.</span>
                </li>
              </ul>
            </CoursesDescription>
          </CoursesCard>

          <CoursesCard>
            <CoursesDescription>
              <h3>Bootcamp Full Stack - Nucba</h3>
              <span style={{ fontSize: "12px" }}>Oct 2022 - Oct 2023</span>
              <ul>
                <li>
                  <span>
                    Desarrollo Web (HTML, CSS, Javascript, React, Context API,
                    Redux Toolkit).
                  </span>
                </li>
                <li>
                  <span>Backend (Node.js).</span>
                </li>
              </ul>
            </CoursesDescription>
          </CoursesCard>
        </CoursesCardsWrapper>
      </CoursesWrapper>
    </>
  );
};

export default Courses;
