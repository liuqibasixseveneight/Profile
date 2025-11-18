import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
  align-items: center;
  background-color: var(--base-400);
  color: #fff;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  height: 100svh;
  left: 0;
  overflow: hidden;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  will-change: clip-path;
  z-index: 2;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const PreloaderRevealer = styled.div`
  aspect-ratio: 1;
  background-color: var(--base-300);
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  will-change: transform;
  z-index: 2;

  background:
    /* Base pearl with refined contrast */ radial-gradient(
      ellipse 140% 110% at 35% 40%,
      #f8f8f8 0%,
      #d8d8d8 50%,
      #c0c0c0 100%
    ),
    /* Vibrant color blobs with irregular positioning */
      radial-gradient(
        ellipse 65% 55% at 18% 22%,
        rgba(255, 100, 150, 1),
        rgba(255, 100, 150, 0.6) 30%,
        transparent 52%
      ),
    radial-gradient(
      ellipse 70% 60% at 75% 18%,
      rgba(100, 190, 255, 1),
      rgba(100, 190, 255, 0.6) 35%,
      transparent 58%
    ),
    radial-gradient(
      ellipse 75% 65% at 48% 65%,
      rgba(100, 255, 190, 1),
      rgba(100, 255, 190, 0.6) 35%,
      transparent 57%
    ),
    radial-gradient(
      ellipse 60% 55% at 85% 78%,
      rgba(255, 225, 120, 1),
      rgba(255, 225, 120, 0.6) 30%,
      transparent 53%
    ),
    radial-gradient(
      ellipse 68% 58% at 38% 52%,
      rgba(190, 120, 255, 1),
      rgba(190, 120, 255, 0.6) 35%,
      transparent 56%
    ),
    radial-gradient(
      ellipse 62% 68% at 63% 32%,
      rgba(255, 150, 200, 1),
      rgba(255, 150, 200, 0.6) 30%,
      transparent 54%
    ),
    radial-gradient(
      ellipse 58% 70% at 28% 82%,
      rgba(140, 215, 255, 1),
      rgba(140, 215, 255, 0.6) 35%,
      transparent 58%
    ),
    /* Off-center luminous glow */
      radial-gradient(
        ellipse 90% 80% at 55% 45%,
        rgba(255, 255, 255, 0.7),
        transparent 58%
      );

  background-blend-mode: lighten, screen, screen, screen, screen, screen, screen,
    screen, screen;
  box-shadow: inset 25px -35px 110px rgba(255, 255, 255, 0.8),
    inset -30px 25px 110px rgba(255, 255, 255, 0.7),
    0 0 150px rgba(255, 255, 255, 0.4);

  @media (max-width: 1000px) {
    width: 300%;
  }
`;

export const PreloaderCopy = styled.div`
  color: #fff;
  display: flex;
  flex: 1;

  & p {
    color: #fff;
    width: 75%;
  }

  & .line {
    color: #fff;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    & p {
      width: 100%;
    }
  }
`;

export const PreloaderCopyCol = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const PreloaderCounter = styled.div`
  color: #fff;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  & p {
    color: #fff;
  }

  & .line {
    color: #fff;
  }

  @media (max-width: 1000px) {
    align-items: center;
  }
`;
