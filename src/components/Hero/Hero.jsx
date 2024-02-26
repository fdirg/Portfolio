import React from "react";
import {
  HeroCardWrapper,
  HeroImageWrapper,
  HeroSocialsWrapper,
  HeroTextWrapper,
  HeroTitleWrapper,
  HeroWrapper,
} from "./HeroStyles";
import FotoPerfil from "../../assets/fotoperfil.jpg";
import ItemsSocial from "../ItemsSocial/ItemsSocial";

const Hero = () => {
  const socials = ItemsSocial();
  const { id, text, icon, link } = socials;

  return (
    <>
      <HeroWrapper id="home">
        <HeroCardWrapper>
          <HeroImageWrapper>
            <img src={FotoPerfil} alt="Foto de perfil" />
          </HeroImageWrapper>
          <HeroTextWrapper>
            <HeroTitleWrapper>
              <h1>Federico Irungaray</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </HeroTitleWrapper>
            <HeroSocialsWrapper>
              {socials.map(({ id, text, icon, link }) => (
                <a key={id} href={link}>
                  {text}
                  <i>{icon}</i>
                </a>
              ))}
            </HeroSocialsWrapper>
          </HeroTextWrapper>
        </HeroCardWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
