import { About } from './components/About';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="mx-auto mb-6 max-w-screen-2xl px-4">
      <Header />
      <div className="flex justify-center overflow-hidden">
        <About />
      </div>
    </div>
  );
}
