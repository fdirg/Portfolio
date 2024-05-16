import styled from "styled-components";
import {
  LinkProjects,
  ProjectCard,
  ProjectsTitle,
  ProjectsWrapper,
} from "../Projects/ProjectsStyles";

export const AboutMeWrapper = styled(ProjectsWrapper)``;

export const AboutMeTitle = styled(ProjectsTitle)``;

export const AboutMeTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutMeDescription = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    line-height: 20px;
  }
`;

export const AboutMeExperienceCard = styled(ProjectCard)`
  max-width: 250px;
  padding: 0 16px;
  align-items: flex-start;
  flex-direction: column;
  gap: 0;
  box-shadow: none;
  border: none;
  border-left: 1px solid var(--gray-color);
  border-radius: 0;
  h2 {
    font-size: 12px;
    border-bottom: 1px solid #fff;
    margin-bottom: 8px;
    font-weight: 400;
  }
  h3 {
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  span:nth-child(2) {
    width: 100%;
    padding-bottom: 4px;
    color: var(--2nd-white);
    font-size: 11px;
    font-weight: 300;
    margin-bottom: 6px;
    border-bottom: 1px solid var(--gray-color);
  }
  span {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const AboutMeEducationWrapper = styled.div``;

export const AboutMeEducationCard = styled.div``;
