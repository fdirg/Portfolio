import React from "react";
import { SkillsImgs, SkillsTitle, SkillsWrapper } from "./SkillsStyles";
import Tools from "../Tools/Tools";
import { RiToolsLine } from "react-icons/ri";

const Skills = () => {
  const tools = Tools();

  return (
    <>
      <SkillsWrapper id="skills">
        <SkillsTitle>
          <h2>Skills</h2>
          <i>
            <RiToolsLine />
          </i>
          <div className="llave"></div>
        </SkillsTitle>
        <SkillsImgs>
          {tools.map((tool) => (
            <img key={tool.id} src={tool.img} alt={tool.alt} />
          ))}
        </SkillsImgs>
      </SkillsWrapper>
    </>
  );
};

export default Skills;
