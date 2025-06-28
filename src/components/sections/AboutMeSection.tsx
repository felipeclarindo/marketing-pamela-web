import PersonalSliderWrapper from "../sliders/PersonalSliderWrapper";

export default function AboutMeSection() {
  return (
    <section className="min-h-screen py-20 px-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-[#C9A969] mb-6 z-10">
        Sobre Mim
      </h2>
      <div className="max-w-4xl text-[#F9F6F1] leading-relaxed 12 z-10 flex flex-col items-left gap-2">
        <span className="max-w-3xl self-center text-[#C9A969] text-lg bg-gray-400/3 p-2">
          🎓 Estudante de Marketing na Unifor e Especialista em conteúdo
          estratégico e audiovisual.
        </span>
        <p>
          Atuo com redes sociais, edição de vídeos, campanhas digitais e
          ferramentas de criação. Uso o audiovisual para conectar marcas ao
          público e gerar resultados.
        </p>
      </div>

      <PersonalSliderWrapper />
    </section>
  );
}
