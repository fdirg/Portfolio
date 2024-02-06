import React from "react";
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
    { id: 2, name: "About me", link: "#home" },
    { id: 3, name: "Skills", link: "/services" },
    { id: 4, name: "Projects", link: "/contact" },
  ];

  return (
    <>
      <HeaderWrapper>
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
