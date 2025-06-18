import Metric from "../ui/Metric";

export default function MetricsSection() {
  return (
    <section className="min-h-screen py-20 bg-[#0A0A0A] text-center px-6">
      <h2 className="text-3xl font-bold text-[#C39C68]">
        Muito mais que uma agência digital
      </h2>
      <p className="text-[#F9F6F1] mt-4 max-w-xl mx-auto">
        Resultados que refletem o impacto do nosso trabalho em cada marca.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
        <Metric value={1443} label="Clientes satisfeitos" />
        <Metric value={341} label="Média de Impressões" />
        <Metric value={712} label="Feedbacks Positivos" />
      </div>
    </section>
  );
}
