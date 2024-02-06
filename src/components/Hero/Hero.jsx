import React from "react";
import { HeroImageWrapper, HeroTextWrapper, HeroWrapper } from "./HeroStyles";
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
      <HeroWrapper id="home">
        <HeroImageWrapper>
          <img src={FotoPerfil} alt="Foto de perfil" />
          <h2>Federico, 24</h2>
          <p>
            Soy programador enfocado en el <span>desarrollo web, </span>
            actualmente viviendo en Rosario, Santa Fe, Argentina.
          </p>
          <div>
            {socials.map((social) => (
              <a key={social.id} href={social.link} target="_blank">
                {social.icon}
              </a>
            ))}
          </div>
        </HeroImageWrapper>
        <HeroTextWrapper>
          <h3>Un poco sobre mi:</h3>
          <p>
            Empece con la programacion hace exactamente 2 años por influencia de
            amigos.
          </p>
        </HeroTextWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
