import Button from "@/components/Button";

const routines = {
  morning: {
    title: "Rotina Matinal",
    subtitle: "Comece o dia em equilíbrio",
    icon: "🌅",
    color: "from-accent/10 to-primary-50",
    blocks: [
      {
        time: "Ao acordar",
        title: "Respiração Abdominal",
        desc: "3 minutos de respiração profunda no abdômen antes de sair da cama. Coloque as mãos sobre o baixo ventre e sinta o abdômen expandir a cada inspiração.",
        duration: "3 min",
      },
      {
        time: "Antes do café",
        title: "Acupressão Yintang",
        desc: "Massageie suavemente o ponto entre as sobrancelhas por 1-2 minutos. Isso acalma o Shen e prepara a mente para o dia.",
        duration: "2 min",
      },
      {
        time: "Café da manhã",
        title: "Alimentação que Nutre o Qi",
        desc: "Prefira alimentos quentes e cozidos: mingau, sopa, chás. Evite alimentos frios e crus pela manhã, pois enfraquecem o Baço.",
        duration: "15 min",
      },
      {
        time: "Início da manhã",
        title: "Qigong — 8 Brocados",
        desc: "Pratique a sequência dos 8 Brocados de Seda (Ba Duan Jin) — movimentos suaves que equilibram o Qi de todos os órgãos.",
        duration: "10 min",
      },
    ],
  },
  evening: {
    title: "Rotina Noturna",
    subtitle: "Desacelere e prepare o sono",
    icon: "🌙",
    color: "from-secondary-50 to-primary-50",
    blocks: [
      {
        time: "2 horas antes de dormir",
        title: "Desconectar das Telas",
        desc: "A MTC recomenda reduzir estímulos para permitir que o Yin se fortaleça. Luz artificial excessiva perturba o Shen.",
        duration: "—",
      },
      {
        time: "1 hora antes",
        title: "Chá Calmante",
        desc: "Prepare um chá de camomila, jasmim ou erva-cidreira. Esses chás nutrem o Yin e acalmam o Fogo do Coração.",
        duration: "10 min",
      },
      {
        time: "30 min antes",
        title: "Banho de Pés Quente",
        desc: "Mergulhe os pés em água morna com gengibre por 15 minutos. Isso direciona a energia para baixo, acalmando a mente.",
        duration: "15 min",
      },
      {
        time: "Na cama",
        title: "Respiração 4-7-8",
        desc: "Pratique 4 ciclos da respiração 4-7-8. A expiração longa ativa o sistema nervoso parassimpático e induz o sono.",
        duration: "3 min",
      },
      {
        time: "Na cama",
        title: "Meditação do Sorriso Interior",
        desc: "Visualize um sorriso de compaixão e direcione-o a cada órgão. Essa prática taoísta promove profundo relaxamento.",
        duration: "5 min",
      },
    ],
  },
};

const weeklyTips = [
  { day: "Segunda", tip: "Pratique Qigong ao ar livre — o Qi da natureza fortalece seu Qi.", icon: "🌳" },
  { day: "Terça", tip: "Massageie o ponto Fígado 3 (dorso do pé) para manter o Qi fluindo.", icon: "👆" },
  { day: "Quarta", tip: "Prepare um chá de ginseng americano para nutrir o Qi e o Yin.", icon: "🍵" },
  { day: "Quinta", tip: "Faça a meditação do sorriso interior antes de dormir.", icon: "😊" },
  { day: "Sexta", tip: "Caminhe 30 minutos em contato com a natureza.", icon: "🚶" },
  { day: "Sábado", tip: "Dedique tempo à prática de Qigong ou Tai Chi mais longa.", icon: "🧘" },
  { day: "Domingo", tip: "Dia de descanso — pratique apenas respiração e introspecção.", icon: "☀️" },
];

export default function Integrar() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-3">Passo 4</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Integrar na Rotina</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A consistência é a chave na MTC. Crie rotinas de autocuidado para
            manhã e noite que respeitem o ritmo natural do seu corpo.
          </p>
        </div>
      </section>

      {/* Routines */}
      {Object.values(routines).map((routine) => (
        <section key={routine.title} className={`bg-gradient-to-b ${routine.color}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{routine.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-primary">{routine.title}</h2>
                <p className="text-sm text-text-muted">{routine.subtitle}</p>
              </div>
            </div>
            <div className="space-y-3">
              {routine.blocks.map((block) => (
                <div key={block.title} className="bg-white rounded-2xl p-5 border border-primary/4 shadow-sm flex gap-4 items-start">
                  <div className="w-20 text-center shrink-0">
                    <div className="text-[10px] text-text-muted uppercase tracking-wider">{block.time}</div>
                    {block.duration !== "—" && (
                      <div className="text-xs text-secondary font-medium mt-1">{block.duration}</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-text-primary mb-1">{block.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Weekly Tips */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-primary mb-2">Dicas Semanais</h2>
        <p className="text-sm text-text-muted mb-8">Um foco diferente para cada dia da semana</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {weeklyTips.map((tip) => (
            <div key={tip.day} className="bg-white rounded-2xl p-5 border border-primary/4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{tip.icon}</span>
                <span className="text-xs font-semibold text-primary">{tip.day}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-primary mb-3">Precisa de orientação personalizada?</h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
            Converse com nosso assistente virtual para receber recomendações adaptadas ao seu momento.
          </p>
          <Button href="/chat">Falar com o Assistente</Button>
        </div>
      </section>
    </div>
  );
}
