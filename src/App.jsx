import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Footer from "./Footer";
import Welcome from "./components/Welcome";
import cmdEffect from "./utils/cmdHandler";

function App() {
  const [commands, setCommands] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behaviour: "smooth" });
  }

  function handleSubmit(cmd) {
    if (cmd === "clear") {
      setCommands([]);
    } else {
      setCommands([...commands, cmdEffect(cmd)]);
    }
  }

  useEffect(scrollToBottom, [commands]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        if (document.activeElement === inputRef.current) {
          return;
        }
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  })


  return (
    <div>
      <div className="content">
        {commands.length < 1 ? <Welcome /> : null}
        {commands.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <Footer onSubmit={handleSubmit}  inputRef={inputRef}/>
    </div>
  );
}

export default App;
