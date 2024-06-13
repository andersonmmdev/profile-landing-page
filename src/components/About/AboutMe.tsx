import { SectionTitle } from '../shared/SectionTitle';

export function AboutMe() {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-between">
      <SectionTitle text="Sobre mim" className="lg:flex" />
      <p className="max-full text-pretty text-justify leading-6 text-slate-100 lg:w-3/5 lg:text-xl">
        Minha trajetória profissional começou como Analista de Testes, onde
        desenvolvi testes automatizados E2E para plataformas web e mobile. Em
        seguida, migrei para o desenvolvimento web e mobile, com foco em
        tecnologias como <b>React</b>, <b>React Native</b> e <b>Node</b>. Estou
        sempre buscando aprimorar minhas habilidades e conhecimentos,
        mantendo-me atualizado com as novas tecnologias e tendências do mercado.
        Meu objetivo é desenvolver soluções de alto desempenho que contribuam
        significativamente para os projetos em que estou envolvido.
      </p>
    </div>
  );
}
