import type { HomeProps } from './types';
import {
  HomeImage,
  HomeTitle,
  HomeTitleIcon,
  HomeTitleWrapper,
  HomeWrapper,
} from './Home.styles';

const HOME_IMAGE_SRC =
  'https://images.unsplash.com/photo-1653398792259-1b31e48c29c4?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const plusIconPositions = [
  {
    id: '0',
    position: 'top-left',
  },
  {
    id: '1',
    position: 'top-right',
  },
  {
    id: '2',
    position: 'bottom-left',
  },
  {
    id: '3',
    position: 'bottom-right',
  },
] as const;

export const Home = ({}: HomeProps) => {
  return (
    <HomeWrapper>
      <HomeImage src={HOME_IMAGE_SRC} alt='Home gradient background' />

      <HomeTitleWrapper>
        <HomeTitle>J-LYTN</HomeTitle>

        {plusIconPositions.map((icon, index) => (
          <HomeTitleIcon key={`${icon.id}-${index}`} $position={icon.position}>
            +
          </HomeTitleIcon>
        ))}
      </HomeTitleWrapper>
    </HomeWrapper>
  );
};
