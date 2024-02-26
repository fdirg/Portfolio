import React from "react";
import { HeaderNav, HeaderWrapper, HeaderHome } from "./HeaderStyles";
import ItemsHeader from "../ItemsHeader/ItemsHeader";

const Header = () => {
  const items = ItemsHeader();
  const { id, name, link } = items;

  return (
    <>
      <HeaderWrapper>
        <div className="container">
          <HeaderHome>
            <a href="#home">/F</a>
          </HeaderHome>
          <HeaderNav>
            <ul>
              {items.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </HeaderNav>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
