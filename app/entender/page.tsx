import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Entender() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-3">
            Passo 1
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Entender a Ansiedade
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Na Medicina Tradicional Chinesa, a ansiedade não é vista apenas como
            um problema mental, mas como um desequilíbrio energético que afeta
            todo o corpo.
          </p>
        </div>
      </section>

      {/* TCM Explanation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              A Visão da MTC sobre a Ansiedade
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Na Medicina Tradicional Chinesa, a ansiedade está
                principalmente relacionada ao desequilíbrio entre o{" "}
                <strong className="text-primary">Coração (Fogo)</strong> e o{" "}
                <strong className="text-primary">Rim (Água)</strong>.
              </p>
              <p>
                Quando o Yin do Rim está deficiente, ele não consegue controlar
                o Fogo do Coração, que se eleva excessivamente, causando
                inquietação, palpitações, preocupação constante e dificuldade
                para dormir.
              </p>
              <p>
                Outro padrão comum é a <strong className="text-primary">Estagnação do Qi do Fígado</strong>, onde o estresse e a
                frustração bloqueiam o livre fluxo de energia, gerando tensão,
                irritabilidade e ansiedade.
              </p>
            </div>
          </div>

          {/* Five Elements */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Os Cinco Elementos e as Emoções
            </h3>
            <div className="space-y-3">
              {[
                { element: "Fogo", organ: "Coração", emotion: "Ansiedade", icon: "🔥", color: "bg-red-50 border-red-100" },
                { element: "Água", organ: "Rim", emotion: "Medo", icon: "💧", color: "bg-blue-50 border-blue-100" },
                { element: "Madeira", organ: "Fígado", emotion: "Irritabilidade", icon: "🌳", color: "bg-green-50 border-green-100" },
                { element: "Terra", organ: "Baço", emotion: "Preocupação", icon: "🌍", color: "bg-yellow-50 border-yellow-100" },
                { element: "Metal", organ: "Pulmão", emotion: "Tristeza", icon: "🪙", color: "bg-gray-50 border-gray-100" },
              ].map((item) => (
                <div key={item.element} className={`flex items-center gap-4 p-4 rounded-2xl border ${item.color}`}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-text-primary">
                      {item.element} — {item.organ}
                    </div>
                    <div className="text-xs text-text-muted">
                      Emoção associada: {item.emotion}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Conceitos Fundamentais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "☯️",
                title: "Yin e Yang",
                desc: "O equilíbrio entre as forças opostas e complementares. A ansiedade surge quando o Yang (fogo, atividade) predomina sobre o Yin (água, calma).",
              },
              {
                icon: "💨",
                title: "Qi (Energia Vital)",
                desc: "A energia que circula pelo corpo. Quando o Qi está bloqueado ou deficiente, surgem desequilíbrios emocionais e físicos.",
              },
              {
                icon: "🫀",
                title: "Shen (Espírito)",
                desc: "O Coração abriga o Shen. Quando o Shen está perturbado, ocorrem ansiedade, insônia e agitação mental.",
              },
              {
                icon: "🔥",
                title: "Fogo do Coração",
                desc: "O Fogo em excesso no Coração causa palpitações, mente acelerada, insônia e sensação de calor no peito.",
              },
              {
                icon: "🌊",
                title: "Yin do Rim",
                desc: "O Yin do Rim nutre e acalma o Coração. Quando deficiente, o Fogo do Coração se eleva sem controle.",
              },
              {
                icon: "🌿",
                title: "Estagnação do Qi",
                desc: "O Qi do Fígado estagna por estresse emocional, gerando tensão, irritabilidade e sensação de nó na garganta.",
              },
            ].map((concept) => (
              <div key={concept.title} className="bg-white rounded-2xl p-6 border border-primary/4 shadow-sm">
                <span className="text-2xl block mb-3">{concept.icon}</span>
                <h3 className="font-semibold text-primary text-sm mb-2">{concept.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-xl font-bold text-primary mb-3">
          Pronto para identificar seu padrão?
        </h2>
        <p className="text-text-muted mb-6 max-w-md mx-auto">
          Agora que você entende a base, vamos descobrir qual padrão de
          desequilíbrio está mais presente em você.
        </p>
        <Button href="/conhecer">Descobrir meu Padrão</Button>
      </section>
    </div>
  );
}
