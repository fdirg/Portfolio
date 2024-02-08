import React from "react";
import {
  SkillsContainer,
  SkillsImgs,
  SkillsTitle,
  SkillsWrapper,
} from "./SkillsStyles";
import Html from "../../assets/HTML.svg";
import Css from "../../assets/CSS3.svg";
import Js from "../../assets/Javascript.png";
import ReactImg from "../../assets/React.png";

const Skills = () => {
  const tools = [
    {
      id: 1,
      img: { Html },
      alt: "Html",
    },
    {
      id: 2,
      img: { Css },
      alt: "Css",
    },
    {
      id: 3,
      img: { Js },
      alt: "Javascript",
    },
    {
      id: 4,
      img: { ReactImg },
      alt: "React",
    },
  ];

  return (
    <>
      <SkillsWrapper id="skills">
        <SkillsContainer>
          <SkillsTitle>
            <h2>Conocimientos</h2>
          </SkillsTitle>
          <SkillsImgs>
            {tools.map((tool) => (
              <div key={tool.id}>
                <img src={tool.img} alt={tool.alt} />
              </div>
            ))}
          </SkillsImgs>
        </SkillsContainer>
      </SkillsWrapper>
    </>
  );
};

export default Skills;
