import React from "react";
import Curriculum from "../../assets/CV-Federico-Irungaray.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const ItemsSocial = () => {
  return [
    {
      id: 1,
      text: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/fdirg",
    },
    {
      id: 2,
      text: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/federicomartinirungaray/",
    },
    {
      id: 3,
      text: "Curriculum",
      icon: <MdContactPage />,
      link: Curriculum,
    },
  ];
};

export default ItemsSocial;
