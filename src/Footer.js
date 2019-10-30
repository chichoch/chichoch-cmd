import React, { useState } from "react";
import "./Footer.css";

export default function Footer(props) {
  const [cmd, setCmd] = useState("");

  function handleOnChange(event) {
    setCmd(event.target.value);
  }

  function handleSubmit(event) {
    props.onSubmit(cmd);
    setCmd("");
    event.preventDefault();
  }

  return (
    <footer className="footer">
      <form onSubmit={handleSubmit}>
        <input type="text" value={cmd} onChange={handleOnChange} />
      </form>
    </footer>
  );
}
