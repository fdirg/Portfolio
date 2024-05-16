import React from "react";
import {
  HeroCardWrapper,
  HeroImageWrapper,
  HeroSocialsWrapper,
  HeroTextWrapper,
  HeroTitleWrapper,
  HeroWrapper,
  LinkHero,
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
              <span>Rosario, Santa fe, Argentina.</span>
            </HeroTitleWrapper>
            <HeroSocialsWrapper>
              {socials.map(({ id, text, icon, link }) => (
                <LinkHero key={id} href={link} target="_blank">
                  <i>{icon}</i>
                  {text}
                </LinkHero>
              ))}
            </HeroSocialsWrapper>
          </HeroTextWrapper>
        </HeroCardWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
