import React, { useState } from "react";
import "./Footer.css";

export default function Footer({onSubmit, inputRef}) {
  const [cmd, setCmd] = useState("");

  function handleOnChange(event) {
    const cmd = event.target.value;
    setCmd(cmd.slice(3, cmd.length));
  }

  function handleSubmit(event) {
    onSubmit(cmd);
    setCmd("");
    event.preventDefault();
  }

  return (
    <footer className="footer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={"$> " + cmd}
          onChange={handleOnChange}
          autoFocus
          ref={inputRef}
        />
      </form>
    </footer>
  );
}
