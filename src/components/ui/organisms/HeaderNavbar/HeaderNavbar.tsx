import { forwardRef } from 'react';
import type { HeaderNavbarProps } from './types';
import {
  HeaderNavbarCta,
  HeaderNavbarLinks,
  HeaderNavbarLogo,
  HeaderNavbarWrapper,
} from './HeaderNavbar.style';

export const HeaderNavbar = forwardRef<HTMLElement, HeaderNavbarProps>(
  ({}, ref) => {
    return (
      <HeaderNavbarWrapper ref={ref}>
        <HeaderNavbarLogo>
          <a href='/'>J-LYTN</a>
        </HeaderNavbarLogo>

        <HeaderNavbarLinks>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Projects</a>
          <a href='/'>Contact</a>
        </HeaderNavbarLinks>

        <HeaderNavbarCta>
          <a href='/'>Get in touch</a>
        </HeaderNavbarCta>
      </HeaderNavbarWrapper>
    );
  }
);
