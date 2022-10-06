import React from "react";
import Help from "../components/Help";
import { white } from "ansi-colors";
import Contact from "../components/Contact";

export default function cmdEffect(cmd) {
  switch (cmd.toLowerCase().trim()) {
    case "bourbons":
      return <Framed src={"https://www.youtube.com/embed/Hvem6PD4abY"} />;
    case "chris-bourbon":
      return <ChrisBourbon />;
    case "tåhäv":
      return <Framed src="https://toehaev.netlify.com/" />;
    case "make-a-line":
      return <Framed src="https://bkd-make-a-line.netlify.com/" />;
    case "sad-benz":
      return <Framed src="https://sad-benz-113db0.netlify.com/" />;
    case "julklappsleksgenerator":
      return <Framed src="https://julklappsleks-generator.netlify.com" />;
    case "contact":
      return <Contact />;
    case "fhcg":
      return <Framed src="https://fhcg-clone.netlify.com/" />;
    case "ls":
    case "help":
      return <Help />;
    case "":
      return <b>You need to write something... ¯\_(ツ)_/¯</b>;
    default:
      return <b>Coulnd't recognize command: {cmd}</b>;
  }
}

const Framed = (props) => {
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

const ChrisBourbon = () => {
  return (
    <iframe
      title="Chris Bourbon"
      style={{ border: "0", width: "350px", height: "470px" }}
      src="https://bandcamp.com/EmbeddedPlayer/album=1091096158/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/"
      seamless
    >
      <a href="http://chrisbourbon.bandcamp.com/album/introducing">
        Introducing by Chris Bourbon
      </a>
    </iframe>
  );
};
