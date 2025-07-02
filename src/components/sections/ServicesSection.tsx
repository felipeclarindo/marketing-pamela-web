import Button from "../ui/Button";

export default function ServiceSection() {
  const services = [
    {
      title: "Criação de Conteúdo",
      desc: "Planejamento e produção de conteúdo para redes sociais que geram engajamento e autoridade.",
    },
    {
      title: "Gestão de Mídias Sociais",
      desc: "Cresça com estratégia, identidade e consistência nas principais plataformas.",
    },
    {
      title: "Campanhas Publicitárias",
      desc: "Criação, monitoramento e otimização de anúncios online para resultados reais.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 text-center px-6 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-[#C39C68]">Serviços</h2>
      <p className="text-[#F9F6F1] mt-2 mb-10">
        Tudo o que você precisa para alavancar sua presença online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:max-w-6xl mx-auto sm:max-w-[350px]">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-black/50 p-6 rounded-xl border border-[#C39C68] hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-[#C39C68]">{s.title}</h3>
            <p className="mt-3 text-[#F9F6F1]">{s.desc}</p>
          </div>
        ))}
      </div>
      {/* <Button
        text="Solicitar Serviço"
        className="max-w-[200px] text-center flex items-center justify-center mx-auto mt-12"
      /> */}
    </section>
  );
}
