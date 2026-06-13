import { ReactNode } from "react";
import Bourbons from "../components/Bourbons.tsx";
import ChalmeRisk from "../components/ChalmeRisk";
import ChrisBourbon from "../components/ChrisBourbon";
import Contact from "../components/Contact";
import Dhd from "../components/Dhd";
import Framed from "../components/Framed";
import Help from "../components/Help";
import Location from "../components/Location";
import Owls from "../components/Owls.tsx";
import Which from "../components/Which";
import Listophe from "../components/Listophe.tsx";

type Command = {
  component: ReactNode | null;
  description: string | null;
};

export const COMMANDS: Record<string, Command> = {
  listophe: {
    description: "a todo list app which is shareable without authentication",
    component: <Listophe />,
  },
  bourbons: {
    description: "see a youtube show with my old band The Bourbons",
    component: <Bourbons />,
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
