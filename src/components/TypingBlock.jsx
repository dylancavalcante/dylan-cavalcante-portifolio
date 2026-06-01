import { useState, useEffect } from "react";
import { TYPING_LINES } from "../assets/data";

/**
 * TypingBlock
 * Plays a typewriter animation through TYPING_LINES,
 * one character at a time.
 */
export default function TypingBlock() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    if (currentLine >= TYPING_LINES.length) {
      setDone(true);
      return;
    }

    const target = TYPING_LINES[currentLine];

    if (currentChar < target.length) {
      const t = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 38);

      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLines((l) => [...l, target]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, 320);

    return () => clearTimeout(t);
  }, [currentLine, currentChar, done]);

  const partial =
    done
      ? ""
      : TYPING_LINES[currentLine]?.slice(0, currentChar) ?? "";

  return (
    <div
      className="
        font-mono
        text-xs
        md:text-sm
        leading-8
        break-words
        overflow-hidden
      "
    >
      {lines.map((line, i) => (
        <div key={i}>
          <span className="text-green mr-2">{">"}</span>
          <span className="text-text">{line}</span>
        </div>
      ))}

      {!done && (
        <div>
          <span className="text-green mr-2">{">"}</span>

          <span className="text-text">
            {partial}
          </span>

          <span
            className="
              text-green
              animate-pulse
            "
          >
            █
          </span>
        </div>
      )}
    </div>
  );
}