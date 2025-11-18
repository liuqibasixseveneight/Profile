import { forwardRef } from 'react';
import {
  PreloaderCopy,
  PreloaderCopyCol,
  PreloaderCounter,
  PreloaderRevealer,
  PreloaderWrapper,
} from './Preloader.styles';
import type { PreloaderProps } from './types';

export const Preloader = forwardRef<
  HTMLDivElement,
  PreloaderProps & {
    preloaderCopyRef?: React.RefObject<HTMLDivElement | null>;
    preloaderCounterRef?: React.RefObject<HTMLDivElement | null>;
    preloaderRevealerRef?: React.RefObject<HTMLDivElement | null>;
  }
>(({ preloaderCopyRef, preloaderCounterRef, preloaderRevealerRef }, ref) => {
  return (
    <PreloaderWrapper ref={ref}>
      <PreloaderRevealer ref={preloaderRevealerRef} />

      <PreloaderCopy ref={preloaderCopyRef}>
        <PreloaderCopyCol>
          <p>Frontend developer</p>
        </PreloaderCopyCol>

        <PreloaderCopyCol>
          <p>J-LYTN</p>
        </PreloaderCopyCol>
      </PreloaderCopy>

      <PreloaderCounter ref={preloaderCounterRef}>
        <p>0%</p>
      </PreloaderCounter>
    </PreloaderWrapper>
  );
});
