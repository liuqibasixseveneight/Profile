import {
  HeaderNavbarInnerWrapper,
  HeaderNavbarWrapper,
} from './HeaderNavbar.style';
import type { HeaderNavbarProps } from './types';

export const HeaderNavbar = ({}: HeaderNavbarProps) => {
  return (
    <HeaderNavbarWrapper>
      <HeaderNavbarInnerWrapper>
        <div>J-LYTN</div>
        <div>[ menu ]</div>
      </HeaderNavbarInnerWrapper>
    </HeaderNavbarWrapper>
  );
};
