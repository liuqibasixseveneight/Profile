import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

import type { HomeProps } from './types';
import { HomeWrapper } from './Home.styles';
import { Hero, Preloader } from '../index';

gsap.registerPlugin(SplitText);

type SplitMask = 'lines' | 'words' | 'chars';

interface SplitOptions {
  type?: SplitMask | SplitMask[];
  mask?: SplitMask;
  linesClass?: string;
}

const splitTextIntoLines = (
  selector: string | Element | Element[] | NodeListOf<Element>,
  options: SplitOptions = {}
) => {
  const defaults = {
    type: (options.type ?? 'lines') as string,
    mask: options.mask ?? 'lines',
    linesClass: options.linesClass ?? 'line',
  };

  return SplitText.create(selector, defaults);
};

export const Home = ({ navRef }: HomeProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const preloaderCopyRef = useRef<HTMLDivElement>(null);
  const preloaderCounterRef = useRef<HTMLDivElement>(null);
  const preloaderRevealerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !preloaderRef.current ||
      !preloaderCopyRef.current ||
      !preloaderCounterRef.current ||
      !preloaderRevealerRef.current ||
      !navRef?.current ||
      !heroImageRef.current ||
      !heroContentRef.current
    ) {
      return;
    }

    const copyParagraphs = preloaderCopyRef.current.querySelectorAll('p');
    const counterParagraph = preloaderCounterRef.current.querySelector('p');

    copyParagraphs.forEach((p) => splitTextIntoLines(p));
    if (counterParagraph) {
      splitTextIntoLines(counterParagraph);
    }

    gsap.set([navRef.current, heroImageRef.current, heroContentRef.current], {
      y: '35svh',
    });

    const animateCounter = (
      element: HTMLParagraphElement | null,
      duration: number = 5,
      delay: number = 0
    ) => {
      if (!element) return;

      let currentValue = 0;
      const updateInterval = 200;
      const maxDuration = duration * 1000;
      const startTime = Date.now();

      setTimeout(() => {
        const updateCounter = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = elapsedTime / maxDuration;

          if (currentValue < 100 && elapsedTime < maxDuration) {
            const target = Math.floor(progress * 100);
            const jump = Math.floor(Math.random() * 25) + 5;
            currentValue = Math.min(currentValue + jump, target, 100);

            element.textContent =
              currentValue.toString().padStart(2, '0') + '%';
            setTimeout(updateCounter, updateInterval + Math.random() * 100);
          } else {
            element.textContent = '100%';
          }
        };

        updateCounter();
      }, delay * 1000);
    };

    animateCounter(counterParagraph, 4.5, 2);

    const copyLines = preloaderCopyRef.current.querySelectorAll('.line');
    const counterLines = preloaderCounterRef.current.querySelectorAll('.line');
    const allLines = [...Array.from(copyLines), ...Array.from(counterLines)];

    const tl = gsap.timeline();

    tl.to(allLines, {
      y: '0%',
      duration: 1,
      stagger: 0.075,
      ease: 'power3.out',
      delay: 1,
    })
      .to(
        preloaderRevealerRef.current,
        {
          scale: 0.1,
          duration: 0.75,
          ease: 'power2.out',
        },
        '<'
      )
      .to(preloaderRevealerRef.current, {
        scale: 0.25,
        duration: 1,
        ease: 'power3.out',
      })
      .to(preloaderRevealerRef.current, {
        scale: 0.5,
        duration: 0.75,
        ease: 'power3.out',
      })
      .to(preloaderRevealerRef.current, {
        scale: 0.75,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(preloaderRevealerRef.current, {
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
      .to(
        preloaderRef.current,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.25,
          ease: 'power3.out',
        },
        '-=1'
      )
      .to(
        [navRef.current, heroImageRef.current, heroContentRef.current],
        {
          y: '0%',
          duration: 1.25,
          ease: 'power3.out',
        },
        '<'
      );
  }, [navRef]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HomeWrapper>
      <Preloader
        ref={preloaderRef}
        preloaderCopyRef={preloaderCopyRef}
        preloaderCounterRef={preloaderCounterRef}
        preloaderRevealerRef={preloaderRevealerRef}
      />

      <Hero
        ref={null}
        heroImageRef={heroImageRef}
        heroContentRef={heroContentRef}
      />
    </HomeWrapper>
  );
};
