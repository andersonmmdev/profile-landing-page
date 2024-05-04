import { About } from "./components/About";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-auto flex-col min-h-dvh bg-slate-100">
      <Header />
      <About />
    </div>
  );
}
