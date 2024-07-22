import styled from "styled-components";
import { ProjectsTitle, ProjectsWrapper } from "../Projects/ProjectsStyles";

export const EducationWrapper = styled(ProjectsWrapper)``;

export const EducacionTitle = styled(ProjectsTitle)``;

export const EducationDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h3 {
    font-weight: 500;
    font-size: 18px;
  }
  span {
    margin: 10px 0 10px 0;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.8rem;
    list-style-type: disc;
  }
  ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 20px;
  }
  ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 60%;
    width: 5px;
    height: 5px;
    background-color: var(--title-color);
    border-radius: 50%;
  }
  ul li span {
    font-size: 15px;
    margin: 0;
  }
  @media (max-width: 670px) {
    h3 {
      font-size: 15px;
    }
    ul li span {
      font-size: 12px;
    }
  }
`;
