import ChatBox from "@/components/ChatBox";

export default function Chat() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-3">
            Assistente Virtual
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Chat de Apoio</h1>
          <p className="text-white/80 max-w-xl leading-relaxed">
            Converse com nosso assistente sobre seus sintomas e receba orientações baseadas na Medicina Tradicional Chinesa.
          </p>
        </div>
      </section>

      {/* Chat */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ChatBox />
        <p className="text-[11px] text-text-muted text-center mt-4">
          Este é um assistente educacional baseado em regras, não em IA. Para
          emergências, use o botão de emergência ou procure ajuda profissional.
        </p>
      </section>
    </div>
  );
}
