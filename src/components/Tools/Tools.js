import React from "react";
import html from "../../assets/html-img.png";
import css from "../../assets/css-img.png";
import js from "../../assets/javascript-img.png";
import reactImg from "../../assets/react-img.png";
import sass from "../../assets/sass-img.png";
import styledcomponents from "../../assets/styled-components-img.png";
import tailwind from "../../assets/tailwind-img.png";
import bootstrap from "../../assets/bootstrap-img.png";
import redux from "../../assets/redux-img.svg";

const Tools = () => {
  return [
    { id: 1, img: html, alt: "Logo HTML" },
    { id: 2, img: css, alt: "Logo Css" },
    { id: 3, img: js, alt: "Logo JavaScript" },
    { id: 4, img: reactImg, alt: "Logo React" },
    { id: 5, img: sass, alt: "Logo Sass" },
    { id: 6, img: styledcomponents, alt: "Logo styled components" },
    { id: 7, img: tailwind, alt: "Logo Tailwind" },
    { id: 8, img: bootstrap, alt: "Logo Bootstrap" },
    { id: 9, img: redux, alt: "Logo Redux" },
  ];
};

export default Tools;
