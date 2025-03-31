import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Footer from "./Footer";
import Welcome from "./components/Welcome";
import cmdEffect from "./utils/cmdHandler";

function App() {
  const [commands, setCommands] = useState([]);
  const bottomRef = useRef(null);

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behaviour: "smooth" });
  }

  useEffect(scrollToBottom, [commands]);

  function handleSubmit(cmd) {
    if (cmd === "clear") {
      setCommands([]);
    } else {
      setCommands([...commands, cmdEffect(cmd)]);
    }
  }

  return (
    <div>
      <div className="content">
        {commands.length < 1 ? <Welcome /> : null}
        {commands.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <Footer onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
