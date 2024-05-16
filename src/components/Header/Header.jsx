import React from "react";
import { HeaderNav, HeaderWrapper, HeaderHome } from "./HeaderStyles";
import ItemsHeader from "../ItemsHeader/ItemsHeader";
import FotoPerfil from "../../assets/fotoperfil.jpg";
import Scroll from "../Scroll/Scroll";

const Header = () => {
  const items = ItemsHeader();

  const { mostrarEtiqueta } = Scroll();

  return (
    <>
      <HeaderWrapper>
        <div className="container" mostrar={mostrarEtiqueta}>
          <HeaderHome mostrar={mostrarEtiqueta}>
            <a href="#home">
              <img src={FotoPerfil} alt="" />
            </a>
          </HeaderHome>
          <HeaderNav move={mostrarEtiqueta}>
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
