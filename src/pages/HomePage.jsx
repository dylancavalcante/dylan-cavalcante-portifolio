import { STATS } from "../assets/data";
import TypingBlock from "../components/TypingBlock";
import CodeSnippet from "../components/CodeSnippet";
import dylanPhoto from "../assets/dylan.jpg";

const ABOUT_CODE = `class Dylan:
  def __init__(self):
    self.role = "Software Engineer"
    self.university = "UnB - Universidade de Brasília"
    self.interests = [
      "sistemas distribuídos",
      "full-stack",
      "clean code",
      "pipelines de dados",
      "café às 2h",
    ]
    self.currently = "buscando estágio, oportunidades 
    de desenvolvimento júnior e freelance."

  def solve(self, problem):
    while not solved:
      self.research()
      self.build()
      self.debug()
    return clean_solution`;

export default function HomePage({ setActive }) {
  return (
    <section className="py-8 md:py-12">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-start
        "
      >
        {/* Coluna esquerda */}
        <div className="text-center lg:text-left">
          <TypingBlock />

          {/* Foto */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <div
              className="
                p-1
                rounded-full
                border
                border-green/30
                bg-card
              "
            >
              <img
                src={dylanPhoto}
                alt="Dylan Cavalcante"
                className="
                  w-40
                  h-40
                  sm:w-44
                  sm:h-44
                  md:w-52
                  md:h-52
                  object-cover
                  rounded-full
                "
              />
            </div>
          </div>

          {/* Nome */}
          <div className="mt-8">
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                font-serif
                text-text
                tracking-tight
              "
            >
              Dylan Cavalcante
            </h1>

            <p
              className="
                mt-3
                text-sm
                text-green
                font-mono
                tracking-wider
              "
            >
              Software Engineer in Progress.
            </p>
          </div>

          {/* Bio */}
          <p
            className="
              mt-6
              text-sm
              md:text-base
              leading-8
              text-muted
              font-mono
            "
          >
            Desenvolvendo sistemas, APIs e automações
            <br />
            com foco em arquitetura, escalabilidade
            <br />
            e resolução de problemas reais.
          </p>

          {/* Badges */}
          <div
            className="
              flex
              flex-wrap
              gap-2
              mt-6
              justify-center
              lg:justify-start
            "
          >
            <span
              className="
                px-3
                py-1
                text-xs
                rounded
                border
                border-border
                bg-card
                text-muted
              "
            >
              UnB · FCTE
            </span>

            <span
              className="
                px-3
                py-1
                text-xs
                rounded
                border
                border-border
                bg-card
                text-muted
              "
            >
              Brasília, DF
            </span>

            <span
              className="
                px-3
                py-1
                text-xs
                rounded
                border
                border-green/30
                bg-green/10
                text-green
              "
            >
              disponível para estágio, freelance ou júnior
            </span>
          </div>

          {/* Botões */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              mt-8
              justify-center
              lg:justify-start
            "
          >
            <button
              onClick={() => setActive("Projetos")}
              className="
                px-5
                py-3
                rounded
                border
                border-green/30
                bg-green/10
                text-green
                text-sm
                hover:bg-green/15
                transition
              "
            >
              ver projetos →
            </button>

            <button
              onClick={() => setActive("Contato")}
              className="
                px-5
                py-3
                rounded
                border
                border-border
                text-muted
                text-sm
                hover:border-faint
                transition
              "
            >
              entrar em contato
            </button>
          </div>
        </div>

        {/* Coluna direita */}
        <div>
          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-3
              mb-5
            "
          >
            {STATS.map((st) => (
              <div
                key={st.l}
                className="
                  bg-card
                  border
                  border-border
                  rounded-md
                  p-4
                  flex
                  flex-col
                  gap-1
                "
              >
                <span
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-green
                    font-mono
                  "
                >
                  {st.n}
                </span>

                <span
                  className="
                    text-[11px]
                    text-muted
                    tracking-wide
                  "
                >
                  {st.l}
                </span>
              </div>
            ))}
          </div>

          <CodeSnippet
            filename="about_me.py"
            code={ABOUT_CODE}
          />
        </div>
      </div>
    </section>
  );
}