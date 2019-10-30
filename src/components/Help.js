import React from "react";

const Help = () => {
  return (
    <div>
      <br />
      To navigate the site, use the following commands:
      <ul>
        <li>
          <Command>test</Command> - prints out test
        </li>
        <li>
          <Command>tåhäv</Command> - stupid site I made to mock my friend Filip
        </li>
        <li>
          <Command>sad-benz</Command> - site with the Curb your Enthusiasm-theme
          and a animated gif
        </li>
        <li>
          <Command>bourbons</Command> - see a youtube show with my old band The
          Bourbons
        </li>
        <li>
          <Command>make-a-line</Command> - BKD Make-a-line (Made with ELM)
        </li>
        <li>
          <Command>julklappsleksgenerator</Command> - christmas gift
          game-generator
        </li>
        <li>
          <Command>clear</Command> - clears the console
        </li>
        <li>
          <Command>help</Command> - shows this
        </li>
      </ul>
    </div>
  );
};

const Command = ({ children }) => {
  return <b style={{ color: "greenyellow" }}>{children}</b>;
};

export default Help;
