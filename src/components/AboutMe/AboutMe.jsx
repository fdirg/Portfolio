import React from "react";
import { AboutMeTitle, AboutMeWrapper } from "./AboutMeStyles";
import { FaRegHand } from "react-icons/fa6";

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
        <AboutMeTitle>
          <h2>Sobre mi</h2>
          <i>
            <FaRegHand />
          </i>
        </AboutMeTitle>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
