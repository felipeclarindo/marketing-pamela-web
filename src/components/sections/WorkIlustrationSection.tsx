import MovieSliderWrapper from "../sliders/MovieSliderWrapper";

export default function WorkIlustrationSection() {
  return (
    <section className="min-h-screen py-20 text-center px-6 relative flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-[#C39C68] mb-12">
        Trabalhos Recentes
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Confira alguns trabalhos cujo criei recentemente para alguns dos meus
        clientes.
      </p>
      <MovieSliderWrapper />
    </section>
  );
}
