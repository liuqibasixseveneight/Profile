import styled from 'styled-components';

export const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const HomeImage = styled.img`
  height: 100%;
  min-height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const HomeTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  justify-content: center;
  margin: 0 auto;
  padding: 4rem;
  pointer-events: none;
  position: relative;
  width: 80%;
  z-index: 1;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 18rem;
  z-index: 1;
`;

export const HomeTitleIcon = styled.div<{
  $position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>`
  color: #fff;
  font-size: 8rem;
  line-height: 1;
  position: absolute;
  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return 'left: 0; top: 0; transform: translate(-50%, -50%);';
      case 'top-right':
        return 'right: 0; top: 0; transform: translate(50%, -50%);';
      case 'bottom-left':
        return 'left: 0; bottom: 0; transform: translate(-50%, 50%);';
      case 'bottom-right':
        return 'right: 0; bottom: 0; transform: translate(50%, 50%);';
    }
  }}
`;
