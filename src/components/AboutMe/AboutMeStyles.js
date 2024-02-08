import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutMeDescriptionContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutMeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  p {
    max-width: 700px;
    font-weight: 400;
  }
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AboutMeCoursesContainer = styled(AboutMeDescriptionContainer)`
  gap: 1rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const AboutMeCoursesCardsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutMeCoursesCard = styled.div`
  width: 600px;
  padding: 1rem 2rem;
  background-color: var(--green-color);
  border: 2px solid var(--2nd-green-color);
  border-radius: 1rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h4 {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 12px;
  }
`;
