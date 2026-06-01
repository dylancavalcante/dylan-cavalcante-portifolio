import { CONTACT_LINKS } from "../assets/data";
import SectionHeader from "../components/SectionHeader";
import CodeSnippet from "../components/CodeSnippet";

const CONTACT_SCRIPT = `#!/bin/bash

echo "Procurando estágio ou oportunidade"
echo "de trabalhar em algo que importe."
echo ""
echo "Se você quer alguém que:"
echo "  ✓ aprende rápido"
echo "  ✓ resolve problema de verdade"
echo "  ✓ não tem medo de depurar"
echo "  ✓ gosta do que faz"
echo ""
echo "Me manda uma mensagem."`;

export default function ContactPage() {
  return (
    <section className="py-12">
      <SectionHeader
        num="04"
        title="Contato"
        sub="Vamos construir algo juntos!"
      />

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >
        {/* Terminal */}
        <CodeSnippet
          filename="contato.sh"
          code={CONTACT_SCRIPT}
        />

        {/* Contatos */}
        <div className="flex flex-col gap-3">
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-md
                border
                border-zinc-800
                bg-zinc-950
                hover:border-green-500/40
                transition-colors
              "
            >
              <div
                className="
                  w-9
                  h-9
                  rounded
                  flex
                  items-center
                  justify-center
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green
                  text-xs
                  font-semibold
                  shrink-0
                "
              >
                {c.icon}
              </div>

              <div className="min-w-0">
                <div
                  className="
                    text-sm
                    text-zinc-100
                    font-mono
                  "
                >
                  {c.label}
                </div>

                <div
                  className="
                    text-xs
                    text-zinc-500
                    font-mono
                    truncate
                  "
                >
                  {c.handle}
                </div>
              </div>

              <span
                className="
                  ml-auto
                  text-zinc-500
                  text-lg
                "
              >
                →
              </span>
            </a>
          ))}

          <div
            className="
              p-4
              rounded-md
              border
              border-green-500/15
              bg-green-500/5
              text-xs
              text-green
              leading-7
              font-mono
            "
          >
            <span className="text-green-400">◆ </span>
            Disponível para estágio, desenvolvimento JR ou projetos freelance a partir de
            julho/2026.
          </div>
        </div>
      </div>
    </section>
  );
}