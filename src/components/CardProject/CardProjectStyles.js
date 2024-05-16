import styled from "styled-components";
import { LinkHero } from "../Hero/HeroStyles";

export const ProjectCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border: 1px solid var(--gray-color);
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    &:hover {
      img {
        transform: translateX(0px) translateY(0px);
        transition: transform 0.5s;
      }
    }
  }
`;

export const ProjectCardImage = styled.div`
  max-width: 280px;
  padding: 14px 0 0 14px;
  background-color: #212529;
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  img {
    width: 100%;
    border-top-left-radius: 8px;
    object-fit: contain;
    transform: translateX(10px) translateY(10px);
    transition: transform 0.5s;
    transition-delay: 0.5s;
  }
`;

export const ProjectCardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.6rem;
  h4 {
    font-size: 1.3rem;
    font-weight: 500;
  }
  p {
    color: var(--2nd-white);
    max-width: 300px;
    font-size: 0.9rem;
    line-height: 1.15rem;
  }
  span {
    color: var(--white-color);
    font-size: 1rem;
  }
`;

export const ProjectCardTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  img {
    max-width: 20px;
  }
`;

export const ProjectCardLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const LinkProjects = styled(LinkHero)`
  &:hover {
    background-color: #fff;
    color: #000;
    box-shadow: none;
    i {
      color: #000;
    }
    .arrow {
      transform: translateX(1px) translateY(-1px);
    }
  }
  i {
    transition: all 0.3s;
  }
`;
