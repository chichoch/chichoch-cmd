import { COMMANDS } from "../utils/commands";
import { Command } from "./Command";

const Help = () => {
  return (
    <div>
      <br />
      To navigate the site, use the following commands:
      <ul>
        {Object.entries(COMMANDS)
          .filter(([_, cmd]) => cmd.description)
          .map(([name, cmd]) => {
            return (
              <li>
                <Command>{name}</Command> - {cmd.description}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Help;
