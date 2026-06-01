import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../assets/data";

export default function Nav({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-[#0d0f0eeb]
        border-b border-border
        backdrop-blur-md
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-4 md:px-8
          h-16
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-green text-lg font-bold">[</span>

          <span
            className="
              text-text
              text-sm
              sm:text-base
              font-semibold
              tracking-[2px]
            "
          >
            DC Portfólio
          </span>

          <span className="text-green text-lg font-bold">]</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                px-4 py-2
                rounded
                text-sm
                transition-all
                ${
                  active === item
                    ? "text-green bg-green/10"
                    : "text-muted hover:text-text"
                }
              `}
            >
              {active === item && "▸ "}
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="
            md:hidden
            p-2
            rounded
            text-green
            hover:opacity-80
            transition
          "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t border-border
            px-4 py-3
            flex flex-col gap-2
            bg-bg
          "
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`
                text-left
                px-3 py-2
                rounded
                text-sm
                transition-all
                ${
                  active === item
                    ? "text-green bg-green/10"
                    : "text-muted hover:text-text"
                }
              `}
            >
              {active === item && "▸ "}
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}