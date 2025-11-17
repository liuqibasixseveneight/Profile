import {
  AboutImage,
  AboutTitle,
  AboutTitleWrapper,
  AboutWrapper,
} from './About.styles';
import type { AboutProps } from './types';

const ABOUT_IMAGE_SRC =
  'https://images.unsplash.com/photo-1660380306537-faff29332a36?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const About = ({}: AboutProps) => {
  return (
    <AboutWrapper>
      <AboutImage src={ABOUT_IMAGE_SRC} alt='About gradient background' />
      <AboutTitleWrapper>
        <AboutTitle>About</AboutTitle>
      </AboutTitleWrapper>
    </AboutWrapper>
  );
};
