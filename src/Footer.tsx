import React, { useState } from "react";
import type { RefObject } from "react";
import "./Footer.css";

const COMMANDS = [
  "bourbons",
  "chris-bourbon",
  "clear",
  "contact",
  "dhd",
  "fhcg",
  "help",
  "hotet",
  "julklappsleksgenerator",
  "ls",
  "make-a-line",
  "sad-benz",
  "tåhäv",
];

function getSuggestion(input: string) {
  if (!input) return "";
  const lower = input.toLowerCase();
  return COMMANDS.find((c) => c.startsWith(lower)) || "";
}

interface FooterProps {
  onSubmit: (cmd: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

export default function Footer({ onSubmit, inputRef }: FooterProps) {
  const [cmd, setCmd] = useState("");

  const suggestion = getSuggestion(cmd);
  const ghostText = suggestion ? suggestion.slice(cmd.length) : "";

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const raw = event.target.value;
    setCmd(raw.slice(3));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab" && ghostText) {
      event.preventDefault();
      setCmd(suggestion);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    onSubmit(cmd);
    setCmd("");
    event.preventDefault();
  }

  return (
    <footer className="footer">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span className="input-ghost">
            {"$> " + cmd}
            <span className="ghost-text">{ghostText}</span>
          </span>
          <input
            type="text"
            value={"$> " + cmd}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            autoFocus
            ref={inputRef}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </form>
    </footer>
  );
}
