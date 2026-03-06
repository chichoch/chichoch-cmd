import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import "./App.css";
import Footer from "./Footer";
import Welcome from "./components/Welcome";
import cmdEffect from "./utils/cmdHandler";

function App() {
  const [commands, setCommands] = useState<ReactNode[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(cmd: string) {
    if (cmd === "clear") {
      setCommands([]);
    } else {
      setCommands([...commands, cmdEffect(cmd)]);
    }
  }

  useEffect(scrollToBottom, [commands]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (document.activeElement === inputRef.current) {
          return;
        }
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    const handleFocus = () => {
      inputRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("focus", handleFocus);
    };
  });

  return (
    <div>
      <div
        className="focus-overlay"
        onClick={() => inputRef.current?.focus()}
      />
      <div className="content">
        {commands.length < 1 ? <Welcome /> : null}
        {commands.map((x, i) => (
          <div key={i} style={{ display: "inline-block" }}>
            {x}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <Footer onSubmit={handleSubmit} inputRef={inputRef} />
    </div>
  );
}

export default App;
