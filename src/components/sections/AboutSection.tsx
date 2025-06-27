export default function AboutSection() {
  const pamelaImages = [
    "/images/pamela1.png",
    "/images/pamela2.png",
    "/images/pamela3.png",
    "/images/pamela4.png",
    "/images/pamela5.png",
  ];
  return (
    <section className="min-h-screen py-20 text-center px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <h2 className="text-4xl font-bold text-[#C39C68] mb-12">Sobre Nós</h2>
      <p className="text-[#F9F6F1] max-w-3xl mx-auto mb-10">
        Somos uma equipe apaixonada por criar experiências digitais únicas e
        impactantes. Nossa missão é ajudar empresas a se destacarem no mundo
        online com soluções personalizadas e inovadoras.
      </p>
      <div className="max-w-4xl mx-auto"></div>
    </section>
  );
}
