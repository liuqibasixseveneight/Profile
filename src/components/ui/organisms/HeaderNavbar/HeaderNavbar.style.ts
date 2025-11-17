import styled from 'styled-components';

export const HeaderNavbarWrapper = styled.header`
  background: #000;
  color: #fff;
  height: 80px;
  position: fixed;
  left: 0;
  margin: 2rem;
  top: 0;
  width: calc(100% - 4rem);
  z-index: 100;
`;

export const HeaderNavbarInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
`;
