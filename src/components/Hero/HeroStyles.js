import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--gray-color);
`;

export const HeroCardWrapper = styled.div`
  color: var(--white-color);
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 140px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 5px solid var(--bg-color);
    object-fit: cover;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.4rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    max-width: 400px;
    font-size: 0.9rem;
    font-weight: 300;
    opacity: 0.9;
  }
`;

export const HeroSocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 8px;
    color: var(--white-color);
    font-size: 0.9rem;
    opacity: 0.8;
    padding: 8px 12px;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    transition: all 0.2s;
  }
  a:hover {
    box-shadow: 0px 6px 1px rgba(0, 0, 0, 0.5);
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
