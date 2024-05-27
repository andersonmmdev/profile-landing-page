import { SectionTitle } from '../shared/SectionTitle';

export function AboutMe() {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-between">
      <SectionTitle text="Sobre mim" className="lg:flex" />
      <p className="max-full text-justify leading-6 text-slate-100 lg:w-3/5 lg:text-xl">
        Minha jornada profissional teve início como Analista de Testes, onde
        desenvolvi testes automatizados E2E para plataformas web e mobile. Logo
        em seguida, migrei para o desenvolvimento web e mobile, utilizando
        principalmente <strong>React</strong>, <strong>React Native</strong> e{' '}
        <strong>Node</strong>. Estou constantemente buscando aprimorar minhas
        habilidades e conhecimentos, além de manter-me atualizado com as novas
        tecnologias e tendências do mercado, para assim entregar soluções de
        qualidade e que atendam as necessidades e requisitos dos clientes.
      </p>
    </div>
  );
}
