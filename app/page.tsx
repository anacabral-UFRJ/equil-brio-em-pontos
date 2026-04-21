import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-4">
              Medicina Tradicional Chinesa
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Encontre seu{" "}
              <span className="text-accent">equilíbrio</span> interior
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Uma plataforma de autocuidado digital que combina sabedoria milenar
              da MTC com práticas acessíveis para lidar com a ansiedade no dia a
              dia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/entender" variant="secondary">
                Começar Agora
              </Button>
              <Button href="/emergencia" variant="emergency">
                🚨 Estou em Crise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Como funciona
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Sua jornada de autocuidado em 5 passos simples
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: "📖", title: "Entender", desc: "Compreenda a ansiedade pela ótica da MTC", href: "/entender" },
            { icon: "🔍", title: "Conhecer", desc: "Identifique seu padrão de desequilíbrio", href: "/conhecer" },
            { icon: "🧘", title: "Praticar", desc: "Exercícios de respiração e acupressão", href: "/praticar" },
            { icon: "🌅", title: "Integrar", desc: "Crie rotinas matinais e noturnas", href: "/integrar" },
            { icon: "💬", title: "Conversar", desc: "Converse com nosso assistente", href: "/chat" },
          ].map((step, i) => (
            <a key={i} href={step.href} className="group bg-white rounded-2xl p-6 border border-primary/4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="text-xs font-medium text-secondary mb-1">Passo {i + 1}</div>
              <h3 className="font-semibold text-text-primary text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-text-muted">{step.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Breathing Preview */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Respiração Guiada
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                A respiração consciente é uma das ferramentas mais poderosas da
                MTC para acalmar a mente. A técnica 4-7-8 ajuda a reduzir o Fogo
                do Coração e restaurar o equilíbrio do Qi.
              </p>
              <Button href="/praticar">Ver Práticas de Respiração</Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-36 h-36 rounded-full border-[3px] border-secondary flex items-center justify-center" style={{ animation: "breathe 8s ease-in-out infinite" }}>
                  <div className="text-center">
                    <div className="text-sm font-medium text-secondary">Inspire</div>
                    <div className="text-xs text-text-muted mt-1">4-7-8</div>
                  </div>
                </div>
                <div className="absolute inset-[-16px] rounded-full border border-secondary/15" style={{ animation: "breathe 8s ease-in-out infinite" }} />
                <div className="absolute inset-[-32px] rounded-full border border-secondary/8" style={{ animation: "breathe 8s ease-in-out infinite 0.3s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Explore a Plataforma
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card href="/entender" icon="📖" title="Entender a Ansiedade" description="Saiba como a MTC explica a ansiedade através dos Cinco Elementos e do equilíbrio Yin-Yang." />
          <Card href="/conhecer" icon="🔍" title="Conhecer seu Padrão" description="Responda perguntas simples para identificar seu padrão de desequilíbrio energético." />
          <Card href="/praticar" icon="🧘" title="Praticar Técnicas" description="Acesse protocolos de respiração, acupressão e meditação baseados em MTC." />
          <Card href="/integrar" icon="🌅" title="Integrar na Rotina" description="Monte rotinas de autocuidado para manhã e noite adaptadas ao seu perfil." />
          <Card href="/chat" icon="💬" title="Chat de Apoio" description="Converse com nosso assistente virtual sobre seus sintomas e receba orientações." />
          <Card href="/emergencia" icon="🚨" title="Emergência" description="Protocolo de crise com técnicas de acalmamento imediato e contatos de ajuda." badge="SEMPRE VISÍVEL" />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-accent/5 border-t border-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
            <strong className="text-accent">Aviso importante:</strong> Esta
            plataforma é uma ferramenta educacional de autocuidado e não substitui
            acompanhamento médico ou psicológico profissional. Em caso de crise,
            procure ajuda especializada imediatamente.
          </p>
        </div>
      </section>
    </div>
  );
}
