import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const HeroImageWrapper = styled.div`
  width: 40%;
  border-right: 2px dashed var(--green-color);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: var(--white-color);
  img {
    width: 160px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 2px solid var(--green-color);
    object-fit: cover;

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    color: var(--gray-color);
    max-width: 300px;
    margin-bottom: 1rem;
    line-height: 20px;
    span {
      font-weight: 600;
      color: var(--white-color);
    }
  }
  a {
    font-size: 1.5rem;
    color: var(--2nd-green-color);
    transition: 0.5s;
    &:hover {
      color: var(--gray-color);
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const HeroTextWrapper = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -400px;
    transform: translateY(-50%);
    width: 400px;
    height: 400px;
    background-color: var(--green-color);
    border-radius: 50%;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
  p {
    max-width: 500px;
    font-weight: 400;
    line-height: 21px;
  }
`;
