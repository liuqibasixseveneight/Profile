import { forwardRef } from 'react';
import type { HeroProps } from './types';
import {
  HeroBrandLink,
  HeroBrandName,
  HeroContent,
  HeroImage,
  HeroWrapper,
} from './Hero.styles';

const HOME_IMAGE_SRC =
  'https://images.unsplash.com/photo-1653398792259-1b31e48c29c4?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const Hero = forwardRef<
  HTMLElement,
  HeroProps & {
    heroImageRef?: React.RefObject<HTMLDivElement | null>;
    heroContentRef?: React.RefObject<HTMLDivElement | null>;
  }
>(({ heroImageRef, heroContentRef }, ref) => {
  return (
    <HeroWrapper ref={ref}>
      <HeroImage ref={heroImageRef}>
        <img src={HOME_IMAGE_SRC} alt='Hero image' />
      </HeroImage>

      <HeroContent ref={heroContentRef}>
        <HeroBrandName>[ J-LYTN ]</HeroBrandName>
        <HeroBrandLink>
          <a href='/'>Get in touch</a>
        </HeroBrandLink>
      </HeroContent>
    </HeroWrapper>
  );
});
