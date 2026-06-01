import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StackPage from "./pages/StackPage";
import TimelinePage from "./pages/TimelinePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [active, setActive] = useState("home");

  const renderPage = () => {
    switch (active) {
      case "Home":
        return <HomePage setActive={setActive} />;

      case "Projetos":
        return <ProjectsPage />;

      case "Stack":
        return <StackPage />;

      case "Currículo":
        return <TimelinePage />;

      case "Contato":
        return <ContactPage />;

      default:
        return <HomePage setActive={setActive} />;
    }
  };

  return (
    <div className="bg-bg min-h-screen text-text font-mono relative">
      {/* CRT Scanline */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Navbar */}
      <Nav active={active} setActive={setActive} />

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-5 px-8 text-xs text-muted text-center relative z-10">
        <span className="text-green">$ </span>
        Dylan Cavalcante · Engenharia de Software · unb · 2026
        <span className="ml-4 opacity-30">
          — Todos os direitos reservados
        </span>
      </footer>
    </div>
  );
}