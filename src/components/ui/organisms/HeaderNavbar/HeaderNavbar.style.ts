import styled from 'styled-components';

export const HeaderNavbarWrapper = styled.nav`
  display: flex;
  gap: 2rem;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  will-change: transform;
  z-index: 1;

  & a {
    background-color: var(--base-200);
    color: var(--base-300);
    height: max-content;
    padding: 0.2rem 0.5rem;
  }

  @media (max-width: 1000px) {
    /**
     * Hide the nav-links on mobile
     */
    /* nav .nav-links {
      display: none;
    } */
  }
`;

export const HeaderNavbarLogo = styled.div`
  display: flex;
  flex: 1;

  & a {
    background-color: var(--base-300);
    color: var(--base-100);
  }
`;

export const HeaderNavbarLinks = styled.div`
  display: flex;
  flex: 2;
  gap: 0.5rem;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderNavbarCta = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
