import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-lg font-semibold text-white">
                Equilíbrio em Pontos
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Plataforma digital de autocuidado para ansiedade baseada na
              Medicina Tradicional Chinesa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <div className="space-y-2">
              {[
                { href: "/entender", label: "Entender" },
                { href: "/conhecer", label: "Conhecer" },
                { href: "/praticar", label: "Praticar" },
                { href: "/integrar", label: "Integrar" },
                { href: "/chat", label: "Chat" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Aviso
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Esta plataforma não substitui acompanhamento profissional. Em caso
              de crise, procure ajuda especializada.
            </p>
            <Link
              href="/emergencia"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-danger/20 text-danger-light text-sm font-medium hover:bg-danger/30 transition-colors"
            >
              Preciso de ajuda agora
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          Equilíbrio em Pontos &copy; {new Date().getFullYear()} — Plataforma
          educacional de autocuidado
        </div>
      </div>
    </footer>
  );
}
