import styled from 'styled-components';

export const AboutWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const AboutImage = styled.img`
  height: 100%;
  min-height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const AboutTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 4rem;
  pointer-events: none;
  position: relative;
  width: 80%;
  z-index: 1;
`;

export const AboutTitle = styled.h1`
  color: #fff;
  font-size: 18rem;
  z-index: 1;
`;
