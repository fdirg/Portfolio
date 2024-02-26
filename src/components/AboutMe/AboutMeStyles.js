import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutMeTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
  i {
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
