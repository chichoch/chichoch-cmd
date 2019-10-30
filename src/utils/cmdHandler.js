import React from "react";
import Help from "../components/Help";

export default function cmdEffect(cmd) {
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
    case "tåhäv":
      return (
        <iframe
          title="Tåhäv"
          width="560"
          height="400"
          src="https://chichoch.github.io/#/t%C3%A5h%C3%A4v"
          frameBorder="0"
        ></iframe>
      );
    case "help":
      return <Help />;
    default:
      return <b>Coulnd't recognize command: {cmd}</b>;
  }
}
