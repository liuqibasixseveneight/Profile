import styled from 'styled-components';

export const HeroWrapper = styled.section`
  height: 100svh;
  overflow: hidden;
  position: relative;
  width: 100%;
  will-change: transform;
`;

export const HeroImage = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
`;

export const HeroContent = styled.div`
  bottom: 5rem;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  will-change: transform;
`;

export const HeroBrandName = styled.div`
  align-items: center;
  background-color: var(--base-100);
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0.75rem 2.5rem;
  width: 100%;
`;
export const HeroBrandLink = styled.div`
  align-items: center;
  background-color: var(--base-300);
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0.75rem 2.5rem;
  width: 100%;

  & a {
    color: var(--base-100);
  }
`;
