import Help from "../components/Help";
import Contact from "../components/Contact";
import Framed from "../components/Framed";
import Dhd from "../components/Dhd";
import ChrisBourbon from '../components/ChrisBourbon';
import Location from '../components/Location';
import Which from "../components/Which";

export default function cmdEffect(cmd: string) {
  switch (cmd.toLowerCase().trim()) {
    case "hotet":
      return <Framed src={"https://www.youtube.com/embed/RbP_QvwbVS8"} />;
    case "dhd":
      return <Dhd />;
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
    case "location":
      return <Location />;
    case "contact":
      return <Contact />;
    case "fhcg":
      return <Framed src="https://fhcg-clone.netlify.app/" />;
    case "ls":
    case "help":
      return <Help />;
    case "which":
      return <Which />;
    case "":
      return <b>You need to write something... ¯\_(ツ)_/¯</b>;
    default:
      return <b>Coulnd't recognize command: {cmd}</b>;
  }
}
