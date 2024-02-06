import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  a {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--white-color);
      transition: width 0.8s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export const HeaderResumeContainer = styled.div`
  margin-right: 2rem;
  padding: 0.9rem 1.8rem;
  font-weight: 500;
  background-color: var(--green-color);
  border-radius: 2rem;
  border: 1px solid var(--2nd-green-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  &:hover {
    background-color: var(--2nd-green-color);
    border: 1px solid var(--gray-color);
  }
  i {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
  }
`;
