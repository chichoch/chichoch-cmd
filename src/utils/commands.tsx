import { ReactNode } from "react";
import Framed from "../components/Framed";
import Help from "../components/Help";
import Contact from "../components/Contact";
import Dhd from "../components/Dhd";
import ChrisBourbon from "../components/ChrisBourbon";
import Location from "../components/Location";
import Which from "../components/Which";
import ChalmeRisk from "../components/ChalmeRisk";
import Owls from "../components/Owls.tsx";

type Command = {
  component: ReactNode | null;
  description: string | null;
};

export const COMMANDS: Record<string, Command> = {
  bourbons: {
    description: "see a youtube show with my old band The Bourbons",
    component: <Framed src={"https://www.youtube.com/embed/RbP_QvwbVS8"} />,
  },
  "chris-bourbon": {
    description: "listen to my solo project",
    component: <ChrisBourbon />,
  },
  clear: {
    description: "clears the console",
    component: null,
  },
  chalmerisk: {
    description:
      "a game I created in school a looong time ago rewritten as a web app",
    component: <ChalmeRisk />,
  },
  contact: {
    description: "how to contact me",
    component: <Contact />,
  },
  dhd: {
    description: "listen to one of my bands, Desire and Her drunks",
    component: <Dhd />,
  },
  fhcg: {
    description:
      "a facebook clone ment to serve the beef. Created with React and Firebase",
    component: <Framed src="https://fhcg-clone.netlify.app/" />,
  },
  help: { description: "shows this", component: <Help /> },
  julklappsleksgenerator: {
    description: "christmas gift game-generator",
    component: <Framed src="https://julklappsleks-generator.netlify.app" />,
  },
  ls: { description: null, component: null },
  "make-a-line": {
    description: "BKD Make-a-line (Made with ELM)",
    component: <Framed src="https://bkd-make-a-line.netlify.app/" />,
  },
  owls: {
    description:
      "a game I created based on a song from my band Desire and her Drunks",
    component: <Owls />,
  },
  "sad-benz": {
    description: "meme page with Curb your Enthusiasm-theme and a animated gif",
    component: <Framed src="https://sad-benz-113db0.netlify.app/" />,
  },
  tåhäv: {
    description: "stupid site I made to mock my friend Filip",
    component: <Framed src="https://toehaev.netlify.app/" />,
  },
  which: { description: null, component: <Which /> },
  location: { description: null, component: <Location /> },
};
