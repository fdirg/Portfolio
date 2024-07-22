import styled from "styled-components";
import { ProjectsTitle, ProjectsWrapper } from "../Projects/ProjectsStyles";

export const AboutMeWrapper = styled(ProjectsWrapper)``;

export const AboutMeTitle = styled(ProjectsTitle)``;

export const AboutMeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 670px) {
    p {
      max-width: 600px;
      font-size: 14px;
    }
  }
`;
