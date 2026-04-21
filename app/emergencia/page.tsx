import Button from "@/components/Button";

const crisisSteps = [
  {
    step: 1,
    title: "Reconheça",
    desc: "Você está tendo uma crise de ansiedade. Isso passa. Você está seguro agora.",
    action: "Diga para si mesmo: 'Estou tendo uma crise de ansiedade. Vai passar.'",
  },
  {
    step: 2,
    title: "Respire",
    desc: "Acalme o sistema nervoso com a respiração 4-7-8.",
    action: "Inspire 4s → Segure 7s → Expire 8s. Repita 4 vezes.",
  },
  {
    step: 3,
    title: "Aterre-se",
    desc: "Use a técnica 5-4-3-2-1 para voltar ao presente.",
    action: "5 coisas que vejo, 4 que toco, 3 que ouço, 2 que cheiro, 1 que saboreio.",
  },
  {
    step: 4,
    title: "Pressione o Ponto",
    desc: "Pressione o ponto Pericárdio 6 (face interna do punho) por 2 minutos.",
    action: "Localize 3 dedos acima da dobra do punho. Pressione firmemente entre os tendões.",
  },
  {
    step: 5,
    title: "Busque Apoio",
    desc: "Se a crise não passar em 15 minutos, procure ajuda profissional.",
    action: "Ligue para o CVV: 188 ou acesse cvv.org.br",
  },
];

const helplines = [
  { name: "CVV — Centro de Valorização da Vida", phone: "188", desc: "Disponível 24h, todos os dias" },
  { name: "SAMU", phone: "192", desc: "Emergências médicas" },
  { name: "CAPS — Centro de Atenção Psicossocial", phone: "Procure o mais próximo", desc: "Atendimento em saúde mental pelo SUS" },
];

export default function Emergencia() {
  return (
    <div>
      {/* Header - Calm, not alarming */}
      <section className="bg-gradient-to-br from-primary-50 to-cream-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🫂</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Você está seguro
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            Se a ansiedade estiver muito forte agora, siga os passos abaixo.
            Um de cada vez. Sem pressa.
          </p>
        </div>
      </section>

      {/* Crisis Protocol */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg font-semibold text-primary mb-8 text-center">
          Protocolo de Crise — Passo a Passo
        </h2>
        <div className="space-y-4">
          {crisisSteps.map((item) => (
            <div
              key={item.step}
              className={`relative bg-white rounded-2xl p-6 border shadow-sm ${
                item.step === 5 ? "border-danger/20 bg-danger-light/30" : "border-primary/4"
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                  item.step === 5 ? "bg-danger text-white" : "bg-primary text-white"
                }`}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">{item.desc}</p>
                  <div className={`text-xs p-3 rounded-xl ${
                    item.step === 5 ? "bg-danger/10 text-danger" : "bg-primary-50 text-primary"
                  }`}>
                    <strong>Ação:</strong> {item.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Breathing Helper */}
      <section className="bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-primary mb-6">Respire Comigo</h2>
          <div className="relative inline-flex items-center justify-center">
            <div
              className="w-40 h-40 rounded-full border-[3px] border-secondary flex items-center justify-center"
              style={{ animation: "breathe 8s ease-in-out infinite" }}
            >
              <div className="text-center">
                <div className="text-lg font-medium text-secondary">Inspire</div>
                <div className="text-xs text-text-muted mt-1">4 — 7 — 8</div>
              </div>
            </div>
            <div
              className="absolute inset-[-18px] rounded-full border border-secondary/15"
              style={{ animation: "breathe 8s ease-in-out infinite" }}
            />
            <div
              className="absolute inset-[-36px] rounded-full border border-secondary/8"
              style={{ animation: "breathe 8s ease-in-out infinite 0.3s" }}
            />
          </div>
          <p className="text-sm text-text-muted mt-8 max-w-sm mx-auto">
            Acompanhe o círculo. Quando ele cresce, inspire. Quando diminui, expire.
          </p>
        </div>
      </section>

      {/* Helplines */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-lg font-semibold text-primary mb-6 text-center">
          Linhas de Apoio
        </h2>
        <div className="space-y-3">
          {helplines.map((line) => (
            <div key={line.name} className="bg-white rounded-2xl p-5 border border-primary/4 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-danger-light flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-text-primary">{line.name}</h3>
                <p className="text-xs text-text-muted">{line.desc}</p>
              </div>
              <div className="text-sm font-bold text-danger">{line.phone}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Message */}
      <section className="bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-4xl block mb-4">🌿</span>
          <h2 className="text-xl font-bold text-primary mb-3">
            Você não está sozinho
          </h2>
          <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed mb-6">
            A ansiedade é temporária. Este momento vai passar. Cuide de si mesmo com a mesma gentileza que cuidaria de alguém que você ama.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/praticar">Ver Práticas Calmantes</Button>
            <Button href="/chat" variant="ghost">Falar no Chat</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
