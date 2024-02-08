import React, { useState, useEffect } from "react";
import {
  HeaderNav,
  HeaderResumeContainer,
  HeaderWrapper,
} from "./HeaderStyles";
import { MdContactPage } from "react-icons/md";
import Curriculum from "../../assets/CV-Federico-Irungaray.pdf";

const Header = () => {
  const items = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About me", link: "#aboutMe" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "/contact" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 30) {
        setHeaderBackground("#232625");
      } else {
        setHeaderBackground("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <HeaderWrapper id="home" style={{ backgroundColor: headerBackground }}>
        <HeaderNav>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </HeaderNav>
        <HeaderResumeContainer>
          <a href={Curriculum} download="Federico Irungaray">
            Resume
          </a>
          <i>
            <MdContactPage />
          </i>
        </HeaderResumeContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
