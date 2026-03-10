import { COMMANDS } from "./commands";

export default function cmdEffect(cmd: string) {
  const command = cmd.toLowerCase().trim();
  if (command === "") {
    return <b>You need to write something... ¯\_(ツ)_/¯</b>;
  }

  return (
    COMMANDS[cmd.toLowerCase().trim()]?.component ?? (
      <b>Couldn't recognize command: {cmd}</b>
    )
  );
}
