import React from "react";
import Help from "../components/Help";
import { white } from "ansi-colors";

export default function cmdEffect(cmd) {
  switch (cmd.toLowerCase().trim()) {
    case "test":
      return <u>Test</u>;
    case "bourbons":
      return <Framed src={"https://www.youtube.com/embed/Hvem6PD4abY"} />;
    case "tåhäv":
      return <Framed src="https://chichoch.github.io/#/t%C3%A5h%C3%A4v" />;
    case "make-a-line":
      return <Framed src="https://bkd-make-a-line.netlify.com/" />;
    case "help":
      return <Help />;
    case "":
      return <b>You need to write something... ¯\_(ツ)_/¯</b>;
    default:
      return <b>Coulnd't recognize command: {cmd}</b>;
  }
}

const Framed = props => {
  return (
    <iframe
      style={{ backgroundColor: white }}
      title={props.src}
      width="560"
      height="400"
      src={props.src}
      frameBorder="0"
    ></iframe>
  );
};
