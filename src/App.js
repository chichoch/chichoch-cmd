import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [commands, setCommands] = useState([]);

  function cmdEffect(cmd) {
    switch (cmd) {
      case "test":
        return <u>Test</u>;
      case "bourbons":
        return (
          <iframe
            title="The Bourbons"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hvem6PD4abY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        );
      default:
        return <b>Coulnd't recognize command: {cmd}</b>;
    }
  }

  function handleSubmit(cmd) {
    setCommands([...commands, cmdEffect(cmd)]);
  }

  return (
    <div>
      <div className="content">
        <h1>Cmd line</h1>
        {commands.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
      <Footer onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
