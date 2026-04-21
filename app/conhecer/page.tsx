"use client";

import { useState } from "react";
import Button from "@/components/Button";

interface Question {
  id: number;
  text: string;
  options: { label: string; pattern: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Como você descreveria sua ansiedade com mais frequência?",
    options: [
      { label: "Mente acelerada, pensamentos sem parar, insônia", pattern: "A" },
      { label: "Medo constante, insegurança, vontade de me esconder", pattern: "B" },
      { label: "Irritabilidade, frustração, sensação de pressão", pattern: "C" },
      { label: "Preocupação excessiva, pensar demais, cansaço mental", pattern: "D" },
      { label: "Tristeza, desânimo, vontade de chorar", pattern: "E" },
    ],
  },
  {
    id: 2,
    text: "Quais sintomas físicos você mais sente?",
    options: [
      { label: "Palpitações, calor no peito, face vermelha", pattern: "A" },
      { label: "Mãos e pés frios, sudorese noturna, tontura", pattern: "B" },
      { label: "Tensão no pescoço, dor de cabeça, suspiros frequentes", pattern: "C" },
      { label: "Problemas digestivos, inchaço, falta de apetite", pattern: "D" },
      { label: "Respiração curta, pele seca, sensação de vazio", pattern: "E" },
    ],
  },
  {
    id: 3,
    text: "Como está seu sono?",
    options: [
      { label: "Dificuldade para dormir, muitos sonhos", pattern: "A" },
      { label: "Acordo várias vezes à noite, medo noturno", pattern: "B" },
      { label: "Difícil adormecer, mente não desliga", pattern: "C" },
      { label: "Sono agitado, sono excessivo de dia", pattern: "D" },
      { label: "Insônia entre 3h-5h da manhã", pattern: "E" },
    ],
  },
  {
    id: 4,
    text: "Qual situação mais desencadeia sua ansiedade?",
    options: [
      { label: "Excesso de estímulos, ambiente agitado", pattern: "A" },
      { label: "Situações de incerteza ou perigo", pattern: "B" },
      { label: "Sentir-se impedido ou frustrado", pattern: "C" },
      { label: "Preocupação com o futuro ou com outros", pattern: "D" },
      { label: "Perdas, despedidas, saudades", pattern: "E" },
    ],
  },
];

const patterns: Record<string, { name: string; element: string; organ: string; description: string; recommendation: string }> = {
  A: {
    name: "Fogo do Coração em Excesso",
    element: "Fogo",
    organ: "Coração",
    description: "Seu padrão sugere que o Fogo do Coração está em excesso, causando hiperatividade mental, insônia e palpitações. O Shen (espírito) está perturbado.",
    recommendation: "Respiração 4-7-8, ponto Yintang, chá de jasmim, evitar cafeína.",
  },
  B: {
    name: "Deficiência do Yin do Rim",
    element: "Água",
    organ: "Rim",
    description: "Seu padrão indica que o Yin do Rim está deficiente, não conseguindo nutrir e controlar o Coração. Isso gera medo, insegurança e sintomas noturnos.",
    recommendation: "Meditação noturna, acupressão no ponto Rim 3, alimentação que nutre o Yin.",
  },
  C: {
    name: "Estagnação do Qi do Fígado",
    element: "Madeira",
    organ: "Fígado",
    description: "Seu padrão sugere que o Qi do Fígado está estagnado por estresse e frustração, gerando tensão, irritabilidade e sensação de pressão.",
    recommendation: "Qigong, caminhada na natureza, ponto Fígado 3, alongamentos.",
  },
  D: {
    name: "Deficiência do Baço (Terra)",
    element: "Terra",
    organ: "Baço",
    description: "Seu padrão indica que o Baço está deficiente, causando preocupação excessiva, pensar demais e sintomas digestivos.",
    recommendation: "Alimentação regular, ponto Baço 6, meditação grounded, rotina estruturada.",
  },
  E: {
    name: "Desarmonia do Pulmão (Metal)",
    element: "Metal",
    organ: "Pulmão",
    description: "Seu padrão sugere desarmonia no Pulmão, associada à tristeza, desânimo e dificuldade em soltar emoções.",
    recommendation: "Exercícios respiratórios profundos, ponto Pulmão 9, caminhada ao ar livre.",
  },
};

export default function Conhecer() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(pattern: string) {
    const newAnswers = [...answers, pattern];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  }

  function reset() {
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
  }

  function getTopPattern(): string {
    const count: Record<string, number> = {};
    answers.forEach((a) => { count[a] = (count[a] || 0) + 1; });
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  }

  if (showResult) {
    const top = getTopPattern();
    const result = patterns[top];
    return (
      <div className="min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-primary/6 shadow-md text-center">
            <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center text-3xl mx-auto mb-6">
              {top === "A" ? "🔥" : top === "B" ? "💧" : top === "C" ? "🌳" : top === "D" ? "🌍" : "🪙"}
            </div>
            <p className="text-sm text-secondary font-medium mb-2">Seu padrão predominante</p>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{result.name}</h1>
            <p className="text-sm text-text-muted mb-6">Elemento {result.element} — Órgão {result.organ}</p>
            <p className="text-text-secondary leading-relaxed mb-6">{result.description}</p>
            <div className="bg-primary-50 rounded-2xl p-6 text-left mb-8">
              <h3 className="font-semibold text-primary text-sm mb-3">Recomendações iniciais:</h3>
              <p className="text-sm text-text-secondary">{result.recommendation}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/praticar">Ver Práticas</Button>
              <Button variant="ghost" onClick={reset}>
                Refazer Questionário
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-secondary-light text-sm font-medium tracking-wider uppercase mb-3">Passo 2</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Conhecer seu Padrão</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Responda algumas perguntas para identificar qual padrão de desequilíbrio da MTC está mais presente na sua vida.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-16">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {questions.map((_, i) => (
            <div key={i} className="flex-1 h-2 rounded-full bg-primary/10 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${i <= current ? "bg-primary" : ""}`}
                style={{ width: i <= current ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted mb-2">Pergunta {current + 1} de {questions.length}</p>
        <h2 className="text-xl font-bold text-primary mb-6">{question.text}</h2>

        <div className="space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.pattern)}
              className="w-full text-left p-4 rounded-2xl border border-primary/8 bg-white hover:bg-primary-50 hover:border-primary/20 hover:shadow-sm transition-all text-sm text-text-primary cursor-pointer"
            >
              <span className="font-medium text-secondary mr-2">{String.fromCharCode(65 + i)}.</span>
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
