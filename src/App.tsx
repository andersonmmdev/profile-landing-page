import { Header } from './components/Header';
import { About } from './components/About';
import { Background } from './components/Background';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header />
      <main className="my-4 flex flex-col justify-center gap-20 overflow-hidden px-4 sm:mt-8 md:px-8 xl:px-24">
        <About />
        <Background />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
