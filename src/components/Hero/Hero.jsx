import React from "react";
import {
  HeroCardWrapper,
  HeroImageWrapper,
  HeroTextWrapper,
  HeroWrapper,
} from "./HeroStyles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FotoPerfil from "../../assets/fotoperfil.jpg";

const Hero = () => {
  const socials = [
    { id: 1, icon: <FaGithub />, link: "https://github.com/fdirg" },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/federicomartinirungaray/",
    },
  ];

  return (
    <>
      <HeroWrapper>
        <HeroCardWrapper>
          <HeroTextWrapper>
            <h1>Hola, Soy Federico Irungaray</h1>
            <p>
              Programador <span>Front-end, </span> y estudiante de programacion.
              Tengo 24 años y soy de la ciudad de Rosario, Santa Fe, Argentina.
            </p>
            <div>
              {socials.map((social) => (
                <a key={social.id} href={social.link} target="_blank">
                  {social.icon}
                </a>
              ))}
            </div>
          </HeroTextWrapper>
          <HeroImageWrapper>
            <img src={FotoPerfil} alt="Foto de perfil" />
          </HeroImageWrapper>
        </HeroCardWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
