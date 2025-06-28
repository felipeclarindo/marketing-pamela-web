import MovieSliderWrapper from "../sliders/MovieSliderWrapper";

export default function WorkIlustrationSection() {
  return (
    <section className="min-h-screen py-20 text-center px-6">
      <h2 className="text-4xl font-bold text-[#C39C68] mb-12">
        Ilustrações de Trabalho
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Confira algumas das ilustrações que criamos para nossos clientes.
      </p>
      <MovieSliderWrapper />
    </section>
  );
}
