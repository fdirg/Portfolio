import React from "react";
import {
  AboutMeDescription,
  AboutMeEducationCard,
  AboutMeEducationWrapper,
  AboutMeExperienceCard,
  AboutMeTextWrapper,
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
        <AboutMeTextWrapper>
          <AboutMeDescription>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, dolor?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              iusto.
            </p>
          </AboutMeDescription>
          <AboutMeExperienceCard>
            <h2>Experiencia laboral</h2>
            <h3>Fotografo - Expertias Inmobiliaria</h3>
            <span>2020 - Act.</span>
            <span>. Fotografia profensional.</span>
            <span>. Uso de Lightroom, Photoshop.</span>
          </AboutMeExperienceCard>
        </AboutMeTextWrapper>
        <AboutMeEducationWrapper>
          <AboutMeEducationCard></AboutMeEducationCard>
        </AboutMeEducationWrapper>
      </AboutMeWrapper>
    </>
  );
};

export default AboutMe;
