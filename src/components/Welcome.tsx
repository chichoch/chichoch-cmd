import type { CSSProperties } from "react";
import Help from "./Help";
import AsciiArt from "./AsciiArt";

const Welcome = () => {
  return (
    <div>
      <AsciiArt />
      <h1 style={styles.title}>
        Welcome to Christophe's nerdy homepage
      </h1>
      <Help />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  title: {
    color: "#00ff41",
    textShadow: "0 0 10px #00ff41, 0 0 20px #003b00",
    fontFamily: "monospace",
    textAlign: "center",
  },
};

export default Welcome;
