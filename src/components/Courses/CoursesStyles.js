import styled from "styled-components";
import {
  ProjectsCardsWrapper,
  ProjectsTitle,
  ProjectsWrapper,
} from "../Projects/ProjectsStyles";
import { EducationDescription } from "../Education/EducationStyles";

export const CoursesWrapper = styled(ProjectsWrapper)``;

export const CoursesTitle = styled(ProjectsTitle)``;

export const CoursesCardsWrapper = styled(ProjectsCardsWrapper)`
  gap: 2rem;
`;

export const CoursesCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoursesDescription = styled(EducationDescription)``;
