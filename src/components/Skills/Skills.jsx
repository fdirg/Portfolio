import React from "react";
import { SkillsCard, SkillsTitle, SkillsWrapper } from "./SkillsStyles";
import { RiToolsLine } from "react-icons/ri";
import { analystTools, devTools } from "../Tools/Tools";

const Skills = () => {
  const dev = devTools();
  const analyst = analystTools();

  return (
    <>
      <SkillsWrapper id="skills">
        <SkillsTitle>
          <h2>Habilidades</h2>
          <i>
            <RiToolsLine />
          </i>
        </SkillsTitle>
        <SkillsCard style={{ marginBottom: "2rem" }}>
          {analyst.map((tool) => (
            <img key={tool.id} src={tool.img} alt={tool.alt} />
          ))}
        </SkillsCard>
        <SkillsCard>
          {dev.map((tool) => (
            <img key={tool.id} src={tool.img} alt={tool.alt} />
          ))}
        </SkillsCard>
      </SkillsWrapper>
    </>
  );
};

export default Skills;
