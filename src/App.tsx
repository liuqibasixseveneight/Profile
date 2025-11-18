import { useRef } from 'react';

import { AppWrapper } from './App.styles';
import { Home } from './components/pages/Home';
import { HeaderNavbar } from './components/ui';

export const App = () => {
  const navRef = useRef<HTMLElement>(null);

  return (
    <AppWrapper>
      <HeaderNavbar ref={navRef} />
      <Home navRef={navRef} />
    </AppWrapper>
  );
};
