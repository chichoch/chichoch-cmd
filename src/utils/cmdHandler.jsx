import React from "react";
import Help from "../components/Help";
import Contact from "../components/Contact";
import Framed from "../components/Framed";
import Spotify from "../components/Spotify";
import ChrisBourbon from '../components/ChrisBourbon';

export default function cmdEffect(cmd) {
  switch (cmd.toLowerCase().trim()) {
    case "hotet":
      return <Framed src={"https://www.youtube.com/embed/RbP_QvwbVS8"} />;
    case "dhd":
      return (
        <Spotify
          link={
            "https://open.spotify.com/embed/artist/2nbXVG0TqBWDsZyLHsT1qG?utm_source=generator"
          }
        />
      );
    case "bourbons":
      return <Framed src={"https://www.youtube.com/embed/Hvem6PD4abY"} />;
    case "chris-bourbon":
      return <ChrisBourbon />;
    case "tåhäv":
      return <Framed src="https://toehaev.netlify.app/" />;
    case "make-a-line":
      return <Framed src="https://bkd-make-a-line.netlify.app/" />;
    case "sad-benz":
      return <Framed src="https://sad-benz-113db0.netlify.app/" />;
    case "julklappsleksgenerator":
      return <Framed src="https://julklappsleks-generator.netlify.app" />;
    case "contact":
      return <Contact />;
    case "fhcg":
      return <Framed src="https://fhcg-clone.netlify.app/" />;
    case "ls":
    case "help":
      return <Help />;
    case "":
      return <b>You need to write something... ¯\_(ツ)_/¯</b>;
    default:
      return <b>Coulnd't recognize command: {cmd}</b>;
  }
}
