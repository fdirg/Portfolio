import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProjectsTitle = styled.div`
  width: 100%;
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  h2 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--title-color);
  }
  i {
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
  }
`;

export const ProjectsCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

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
    transition: transform 0.3s;
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
    max-width: 300px;
    font-size: 0.9rem;
    line-height: 1.15rem;
    opacity: 0.8;
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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--white-color);
    font-size: 0.9rem;
    opacity: 0.8;
    padding: 8px 12px;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    transition: all 0.3s;
  }
  a:hover {
    background-color: #fff;
    color: #000;
    i {
      color: #000;
    }
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
`;
