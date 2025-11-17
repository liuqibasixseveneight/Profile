import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

import { AppWrapper } from './App.styles';
// import { About, Home } from './components/pages';
// import { HeaderNavbar } from './components/ui';

gsap.registerPlugin(SplitText);

const HOME_IMAGE_SRC =
  'https://images.unsplash.com/photo-1653398792259-1b31e48c29c4?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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

export const App = () => {
  useGSAP(() => {
    splitTextIntoLines('.preloader-copy p');
    splitTextIntoLines('.preloader-counter p');

    gsap.set(['nav', '.hero-img', '.hero-content'], {
      y: '35svh',
    });

    const animateCounter = (selector, duration = 5, delay = 0) => {
      const counterElement = document.querySelector(selector);
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

            counterElement.textContent = currentValue
              .toString()
              .padStart(2, '0');
            setTimeout(updateCounter, updateInterval + Math.random() * 100);
          } else {
            counterElement.textContent = '100';
          }
        };

        updateCounter();
      }, delay * 1000);
    };

    animateCounter('.preloader-counter p', 4.5, 2);

    const tl = gsap.timeline();

    tl.to(['.preloader-copy p .line', '.preloader-counter p .line'], {
      y: '0%',
      duration: 1,
      stagger: 0.075,
      ease: 'power3.out',
      delay: 1,
    })
      .to(
        '.preloader-revealer',
        {
          scale: 0.1,
          duration: 0.75,
          ease: 'power2.out',
        },
        '<'
      )
      .to('.preloader-revealer', {
        scale: 0.25,
        duration: 1,
        ease: 'power3.out',
      })
      .to('.preloader-revealer', {
        scale: 0.5,
        duration: 0.75,
        ease: 'power3.out',
      })
      .to('.preloader-revealer', {
        scale: 0.75,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to('.preloader-revealer', {
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      })
      .to(
        '.preloader',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.25,
          ease: 'power3.out',
        },
        '-=1'
      )
      .to(
        ['nav', '.hero-img', '.hero-content'],
        {
          y: '0%',
          duration: 1.25,
          ease: 'power3.out',
        },
        '<'
      );
  }, []);

  return (
    <AppWrapper>
      {/* PRELOADER */}
      <div className='preloader'>
        <div className='preloader-revealer'></div>

        <div className='preloader-copy'>
          <div className='preloader-copy-col'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              veniam voluptate neque, soluta exercitationem dolore adipisci
              saepe corporis incidunt officia! At consectetur pariatur eum non
              quaerat ea dicta quasi sit.
            </p>
          </div>

          <div className='preloader-copy-col'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              veniam voluptate neque, soluta exercitationem dolore adipisci
              saepe corporis incidunt officia! At consectetur pariatur eum non
              quaerat ea dicta quasi sit.
            </p>
          </div>
        </div>

        <div className='preloader-counter'>
          <p>00</p>
        </div>
      </div>

      {/* POST-PRELOADER CONTENT */}
      <nav>
        <div className='nav-logo'>
          <a href='/'>J-LYTN</a>
        </div>

        <div className='nav-links'>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Projects</a>
          <a href='/'>Contact</a>
        </div>

        <div className='nav-cta'>
          <a href='/'>Get in touch</a>
        </div>
      </nav>

      <section className='hero'>
        <div className='hero-img'>
          <img src={HOME_IMAGE_SRC} alt='Hero image' />
        </div>

        <div className='hero-content'>
          <div className='product-name'>[ J-LYTN ]</div>
          <div className='product-link'>
            <a href='/'>Get in touch</a>
          </div>
        </div>
      </section>

      {/* PAGES */}
      {/* <HeaderNavbar /> */}
      {/* <Home /> */}
      {/* <About /> */}
    </AppWrapper>
  );
};
