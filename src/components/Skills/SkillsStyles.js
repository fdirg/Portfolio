import styled from "styled-components";
import {
  ProjectCard,
  ProjectsCardsWrapper,
  ProjectsTitle,
  ProjectsWrapper,
} from "../Projects/ProjectsStyles";

export const SkillsWrapper = styled(ProjectsWrapper)``;

export const SkillsTitle = styled(ProjectsTitle)``;

export const SkillsImgs = styled(ProjectCard)`
  padding: 18px 0;
  flex-wrap: wrap;
  gap: 1.5rem;
  img {
    max-width: 40px;
    transition: scale 0.3s;
  }
  img:hover {
    scale: 1.1;
  }
`;
