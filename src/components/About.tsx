export function About() {
  return (
    <section id="about" className="flex p-12 justify-around">
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="flex gap-3 text-nowrap text-slate-900 text-2xl">
          Olá!{" "}
          <span>
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="24"
              height="24"
              alt="hello"
            />
          </span>
          Sou o Anderson.
        </h2>
        <h1 className="text-slate-900 text-3xl font-medium">
          Atuo como desenvolvedor{" "}
          <span className="text-cyan-400">Full Stack</span>, com experiência em
          React, React Native e Node a mais de 6 anos.
        </h1>
      </div>
      <div className="flex items-center min-w-fit">
        <img
          src="https://github.com/andersonmdev.png?size=244"
          alt="Profile picture"
          className="rounded-full h-64 w-64 z-10"
        />
        <div className="bg-cyan-400 rounded-full h-56 w-56 -ml-32" />
      </div>
    </section>
  );
}
