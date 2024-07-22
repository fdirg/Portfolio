import React from "react";
import {
  EducacionTitle,
  EducationDescription,
  EducationWrapper,
} from "./EducationStyles";

const Education = () => {
  return (
    <>
      <EducationWrapper id="formacion">
        <EducacionTitle>
          <h2>Formacion Academica</h2>
        </EducacionTitle>
        <EducationDescription>
          <h3>
            Tecnicatura en Programacion - UTN - Rosario, Santa Fe, Argentina.
          </h3>
          <span style={{ fontSize: "12px" }}>Jun 2022 - Act.</span>
          <ul>
            <li>
              <span>
                Desarrollo Web (HTML, CSS, Javascript, React), Python, SQL.
              </span>
            </li>
            <li>
              <span>Estadistica, matematica y contabilidad.</span>
            </li>
            <li>
              <span>
                Actualmente cursando el 2do y ultimo año de la tecnicatura.
              </span>
            </li>
          </ul>
        </EducationDescription>
      </EducationWrapper>
    </>
  );
};

export default Education;
