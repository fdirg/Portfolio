import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroCardWrapper = styled.div`
  border-radius: 3rem;
  border: 1px solid var(--2nd-green-color);
  color: var(--white-color);
  padding: 2rem 4rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  &::after {
    content: "";
    position: absolute;
    right: -200px;
    transform: translateY(-50%);
    width: 400px;
    height: 400px;
    background-color: var(--green-color);
    border-radius: 50%;
    filter: blur(80px);
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  img {
    width: 160px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 2px solid var(--green-color);
    object-fit: cover;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
  }
  p {
    color: var(--gray-color);
    max-width: 480px;
    margin-bottom: 1rem;
    line-height: 20px;
    span {
      font-weight: 600;
      color: var(--white-color);
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a {
      font-size: 1.4rem;
      color: var(--2nd-green-color);
    }
  }
`;
