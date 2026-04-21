"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  role: "user" | "system";
  text: string;
}

const responses: Record<string, string> = {
  ansiedade:
    "Na MTC, a ansiedade está ligada ao desequilíbrio entre o Coração (Fogo) e o Rim (Água). Quando o Yin do Rim está deficiente, o Fogo do Coração se eleva. Vou te guiar para restaurar esse equilíbrio. Que tal experimentar a respiração 4-7-8?",
  respiracao:
    "A respiração 4-7-8 é excelente para acalmar o Fogo do Coração: inspire por 4 segundos, segure por 7 segundos e expire por 8 segundos. Deseja que eu te guie passo a passo?",
  acupressao:
    "O ponto Yintang, localizado entre as sobrancelhas, é conhecido como o 'ponto da calma'. Pressione suavemente por 1-2 minutos em movimentos circulares. O ponto Pericárdio 6, no punho interno, também é muito eficaz para ansiedade.",
  dormir:
    "Para nutrir o Yin do Rim antes de dormir, evite telas 1 hora antes, faça uma compressa morna nos pés e pratique respiração abdominal. A MTC recomenda dormir antes das 23h, quando a energia do Fígado começa a se restaurar.",
  stress:
    "O estresse bloqueia o livre fluxo do Qi do Fígado (Estagnação do Qi). Praticar Qigong, caminhar na natureza e massagear o ponto Fígado 3 (no dorso do pé) podem ajudar a desbloquear esse fluxo.",
  default:
    "Compreendo. Na MTC, cada emoção está conectada a um órgão. Pode me contar mais sobre o que está sentindo? Assim posso sugerir uma prática específica para o seu momento.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("ansied") || lower.includes("angúst") || lower.includes("preocup"))
    return responses.ansiedade;
  if (lower.includes("respir") || lower.includes("inspir") || lower.includes("fôlego"))
    return responses.respiracao;
  if (lower.includes("acupress") || lower.includes("ponto") || lower.includes("massag"))
    return responses.acupressao;
  if (lower.includes("dorm") || lower.includes("sono") || lower.includes("noite"))
    return responses.dormir;
  if (lower.includes("stress") || lower.includes("estress") || lower.includes("tens"))
    return responses.stress;
  return responses.default;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "system",
      text: "Olá! Sou o assistente do Equilíbrio em Pontos. Posso te ajudar com técnicas de MTC para ansiedade, respiração, acupressão e mais. Como você está se sentindo agora?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: input };
    const botMsg: Message = {
      id: Date.now() + 1,
      role: "system",
      text: getResponse(input),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-2xl border border-primary/6 shadow-sm overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-white rounded-br-md"
                  : "bg-primary-50 text-text-primary rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-primary/6 bg-cream/50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Como você está se sentindo?"
            className="flex-1 px-4 py-3 rounded-2xl border border-primary/10 bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-2xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shrink-0 cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
