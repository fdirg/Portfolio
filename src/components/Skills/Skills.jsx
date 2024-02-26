import React from "react";
import { SkillsImgs, SkillsTitle, SkillsWrapper } from "./SkillsStyles";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiStyledcomponents, SiTailwindcss, SiRedux } from "react-icons/si";
import { RiToolsLine } from "react-icons/ri";

const Skills = () => {
  const tools = [
    {
      category: "frontend",
      tools: [
        {
          id: 1,
          icon: <FaHtml5 />,
          name: "Html",
        },
        {
          id: 2,
          icon: <FaCss3Alt />,
          name: "Css",
        },
        {
          id: 3,
          icon: <IoLogoJavascript />,
          name: "Javascript",
        },
        {
          id: 4,
          icon: <FaReact />,
          name: "React",
        },
      ],
    },
    {
      category: "css",
      tools: [
        {
          id: 5,
          icon: <SiStyledcomponents />,
          name: "Styled components",
        },
        {
          id: 6,
          icon: <SiTailwindcss />,
          name: "Tailwind",
        },
        {
          id: 7,
          icon: <FaBootstrap />,
          name: "Bootstrap",
        },
      ],
    },
    {
      category: "state",
      tools: [
        {
          id: 8,
          icon: <SiRedux />,
          name: "Redux Toolkit",
        },
      ],
    },
  ];

  return (
    <>
      <SkillsWrapper id="skills">
        <SkillsTitle>
          <h2>Skills</h2>
          <i>
            <RiToolsLine />
          </i>
        </SkillsTitle>
        <SkillsImgs>
          {tools.map((tool) => (
            <div key={tool.id}>
              <i>{tool.icon}</i>
              <span>{tool.name}</span>
            </div>
          ))}
        </SkillsImgs>
      </SkillsWrapper>
    </>
  );
};

export default Skills;
