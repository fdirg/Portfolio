import React from "react";
import {
  AboutMeCoursesCard,
  AboutMeCoursesCardsContainer,
  AboutMeCoursesContainer,
  AboutMeDescription,
  AboutMeDescriptionContainer,
  AboutMeWrapper,
} from "./AboutMeStyles";

const AboutMe = () => {
  const studies = [
    {
      id: 1,
      name: "Ingeneria en Sistemas",
      uni: "Universidad Tecnologica Nacional",
      time: "2024 - Act.",
    },
    {
      id: 2,
      name: "Tecnicatura en Programacion",
      uni: "Universidad Tecnologica Nacional",
      time: "2022 - Act.",
    },
  ];

  return (
    <>
      <AboutMeWrapper id="aboutMe">
        <AboutMeDescriptionContainer>
          <AboutMeDescription>
            <p>
              Mi experiencia con el mundo de la programacion empezo en 2021 de
              manera autodidacta, influenciado por un amigo. Desde un principio
              se me hizo entretenido y llevadero el programar, diseñando paginas
              con solo HTML, y el desafio de realizar nuevos proyectos cada dia
              mas complejos se me hace interesante. A lo largo del tiempo fui
              aprendiendo nuevas herramientas, eligiendo el desarrollo web como
              enfoque.
            </p>
            <p>
              He realizado varios cursos de diversas herramientas, como por
              ejemplo <span>Next.Js</span>, <span>Python</span>, o un Bootcamp
              relacionado con el desarrollo web y el Back-end con
              <span> Node.js</span>
            </p>
          </AboutMeDescription>
        </AboutMeDescriptionContainer>
        <AboutMeCoursesContainer>
          <h2>Actualmente me encuentro estudiando</h2>
          <AboutMeCoursesCardsContainer>
            {studies.map((studie) => (
              <AboutMeCoursesCard key={studie.id}>
                <h3>{studie.name}</h3>
                <h4>{studie.uni}</h4>
                <span>{studie.time}</span>
              </AboutMeCoursesCard>
            ))}
          </AboutMeCoursesCardsContainer>
        </AboutMeCoursesContainer>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
