import { Header } from './components/Header';
import { About } from './components/About';
import { Background } from './components/Background';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { ScrollTopButton } from './components/shared/ScrollTopButton';

export default function App() {
  return (
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
  );
}
