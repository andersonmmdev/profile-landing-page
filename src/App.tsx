import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Seo } from './components/Seo';
import { Loading } from './components/shared/Loading';
import { ScrollTopButton } from './components/shared/ScrollTopButton';

const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Background = lazy(() => import('./components/Background'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <HelmetProvider>
      <Seo />
      <Suspense fallback={<Loading />}>
        <div className="mx-auto max-w-screen-2xl">
          <Header />
          <main className="my-3 flex flex-col justify-center gap-8 overflow-hidden px-4 sm:mt-8 sm:gap-12 md:px-8 xl:gap-16 xl:px-24">
            <About />
            <Background />
            <Projects />
            <Contact />
            <ScrollTopButton />
          </main>
          <Footer />
        </div>
      </Suspense>
    </HelmetProvider>
  );
}
