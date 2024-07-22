import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 600px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderHome = styled.div`
  max-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ mostrar }) => (mostrar ? "1" : "0")};
  visibility: ${({ mostrar }) => (mostrar ? "visible" : "hidden")};
  transition: all 0.3s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  transition: transform 0.5s;
  transform: ${({ move }) => (move ? "translateX(33px)" : "translateX(-43px)")};
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
  }
  li {
    list-style: none;
  }
  a {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--white-color);
      transition: width 0.3s ease;
    }
    &:hover::before {
      width: 100%;
    }
  }
  @media (max-width: 670px) {
    display: none;
  }
`;
