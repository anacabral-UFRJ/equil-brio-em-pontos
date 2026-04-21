import Button from "@/components/Button";

const practices = [
  {
    category: "Respiração",
    icon: "🌬️",
    items: [
      {
        title: "Respiração 4-7-8",
        time: "3 min",
        difficulty: 1,
        desc: "Inspire por 4s, segure por 7s, expire por 8s. Acalma o Fogo do Coração e reduz a ansiedade aguda.",
        steps: [
          "Sente-se confortavelmente com as costas retas",
          "Coloque a ponta da língua no palato (atrás dos dentes superiores)",
          "Inspire pelo nariz contando até 4",
          "Segure o ar contando até 7",
          "Expire pela boca contando até 8, fazendo um som suave",
          "Repita o ciclo 4 vezes",
        ],
      },
      {
        title: "Respiração Abdominal",
        time: "5 min",
        difficulty: 1,
        desc: "Respiração profunda no abdômen que fortalece o Qi do Rim e promove calma profunda.",
        steps: [
          "Deite-se ou sente-se confortavelmente",
          "Coloque uma mão no peito e outra no abdômen",
          "Inspire lentamente pelo nariz, expandindo o abdômen",
          "A mão do peito deve mover-se o mínimo possível",
          "Expire lentamente pela boca, contraindo suavemente o abdômen",
          "Repita por 5 minutos",
        ],
      },
    ],
  },
  {
    category: "Acupressão",
    icon: "👆",
    items: [
      {
        title: "Ponto Yintang (Entre as Sobrancelhas)",
        time: "2 min",
        difficulty: 1,
        desc: "O 'ponto da calma'. Excelente para acalmar a mente, reduzir ansiedade e melhorar o sono.",
        steps: [
          "Localize o ponto exatamente entre as duas sobrancelhas",
          "Pressione suavemente com o dedo indicador ou médio",
          "Faça movimentos circulares lentos no sentido horário",
          "Mantenha a pressão firme mas confortável por 1-2 minutos",
          "Respire profundamente enquanto massageia",
          "Sinta a sensação de calma se espalhar pela testa",
        ],
      },
      {
        title: "Ponto Pericárdio 6 (Neiguan)",
        time: "3 min",
        difficulty: 2,
        desc: "Localizado no antebraço, é um dos pontos mais eficazes para ansiedade, náusea e agitação.",
        steps: [
          "Coloque três dedos (indicador, médio, anelar) no punho, na face interna",
          "O ponto está logo abaixo, entre os dois tendões",
          "Pressione firmemente com o polegar oposto",
          "Faça movimentos circulares por 1-2 minutos de cada lado",
          "A sensação pode ser levemente dolorida — isso é normal",
          "Repita no outro braço",
        ],
      },
      {
        title: "Ponto Coração 7 (Shenmen)",
        time: "2 min",
        difficulty: 1,
        desc: "O 'Porta do Espírito' — no punho, acalma o Shen e trata insônia e ansiedade.",
        steps: [
          "Vire a palma da mão para cima",
          "Localize a dobra do punho, no lado do dedo mínimo",
          "Pressione suavemente na depressão entre os ossos",
          "Mantenha por 30 segundos a 1 minuto",
          "Respire profundamente enquanto pressiona",
          "Repita no outro punho",
        ],
      },
    ],
  },
  {
    category: "Meditação e Qigong",
    icon: "🧘",
    items: [
      {
        title: "Meditação do Sorriso Interior",
        time: "10 min",
        difficulty: 2,
        desc: "Prática taoísta que envia energia positiva para cada órgão, promovendo harmonia interna.",
        steps: [
          "Sente-se confortavelmente, feche os olhos",
          "Respire naturalmente por alguns momentos",
          "Visualize um sorriso genuíno no seu rosto",
          "Direcione esse sorriso para o Coração — sinta gratidão",
          "Envie o sorriso para o Fígado — solte frustrações",
          "Continue para Baço, Pulmões e Rins, um de cada vez",
        ],
      },
      {
        title: "Qigong para Ansiedade",
        time: "8 min",
        difficulty: 3,
        desc: "Sequência simples de movimentos que desbloqueia o Qi do Fígado e acalma a mente.",
        steps: [
          "Fique em pé, pés na largura dos ombros",
          "Eleve os braços lentamente inspirando pelo nariz",
          "Abra os braços para os lados como uma árvore",
          "Expire baixando os braços, soltando tensão",
          "Faça movimentos suaves de torção do tronco",
          "Repita 8 vezes com respiração consciente",
        ],
      },
    ],
  },
];

export default function Praticar() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-3">Passo 3</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Praticar Técnicas</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Explore protocolos de respiração, acupressão e meditação baseados na Medicina Tradicional Chinesa.
          </p>
        </div>
      </section>

      {/* Practices */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {practices.map((cat) => (
          <div key={cat.category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{cat.icon}</span>
              <h2 className="text-2xl font-bold text-primary">{cat.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <details key={item.title} className="group bg-white rounded-2xl border border-primary/4 shadow-sm overflow-hidden">
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-text-primary text-sm pr-4">{item.title}</h3>
                      <div className="flex gap-1 shrink-0">
                        {[1, 2, 3].map((d) => (
                          <div key={d} className={`w-1.5 h-1.5 rounded-full ${d <= item.difficulty ? "bg-secondary" : "bg-primary/10"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary font-medium">{item.time}</span>
                      <svg className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 border-t border-primary/6">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 mt-4">Passo a passo</h4>
                    <ol className="space-y-2">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-xs text-text-secondary">
                          <span className="w-5 h-5 rounded-full bg-primary-50 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-primary mb-3">Pronto para integrar na sua rotina?</h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
            Crie rotinas de autocuidado personalizadas para manhã e noite.
          </p>
          <Button href="/integrar">Criar Minha Rotina</Button>
        </div>
      </section>
    </div>
  );
}
