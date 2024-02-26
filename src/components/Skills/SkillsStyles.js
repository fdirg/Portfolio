import styled from "styled-components";

export const SkillsWrapper = styled.section`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SkillsTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SkillsImgs = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  i {
    font-size: 2.5rem;
    color: var(--gray-color);
  }
  span {
    max-width: 100px;
    font-weight: 500;
  }
`;
