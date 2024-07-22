import styled from "styled-components";
import { ProjectsTitle, ProjectsWrapper } from "../Projects/ProjectsStyles";
import { ProjectCard } from "../CardProject/CardProjectStyles";

export const SkillsWrapper = styled(ProjectsWrapper)``;

export const SkillsTitle = styled(ProjectsTitle)``;

export const SkillsCard = styled(ProjectCard)`
  padding: 18px 0;
  flex-wrap: wrap;
  gap: 1.5rem;
  img {
    max-width: 40px;
  }
  img:hover {
    scale: 1.1;
  }
  @media (max-width: 670px) {
    img {
      max-width: 30px;
    }
  }
`;
