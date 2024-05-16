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
    font-size: 1rem;
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
