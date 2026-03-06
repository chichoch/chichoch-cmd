import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const CHRIS = [
  "                                                                 ",
  "                                                                 ",
  "                         &&&&&&&&& &&&&&&                        ",
  "                      &&&&&&&&&&&& &&&&&&&&&                      ",
  "                    &&&&&&&&&&&      &&&&&&&&&                    ",
  "                   &&&&&&&&&&&&&&  &&&&&&&&&&&&                   ",
  "                  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                  ",
  "                 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                 ",
  "                 &             &&&&&&&    &&&&&&&                ",
  "                 &    &&&&&    &&&&&           &&                ",
  "                     &&&  &&  &&&&&&  &&&&&&&                     ",
  "                            &&&&&&&&&&     &&                     ",
  "                      &&&&&&&&&&&&&&&&&&&                         ",
  "                    &&&&&&&&&& &&&&  &&&&&&&&                     ",
  "                    &&&&&&&&&&&&&&&&&&&&&&&&&&&                   ",
  "                  &&&&&&&&&&&&&&&&&&&&&&&&&&&&                    ",
  "                  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                  ",
  "                 &&&&&&&&&&         &&&&&&&&&&&&                 ",
  "                 &&&&&&&&&             &&&&&&&&                  ",
  "                &&&&&&&&&  &&&&&&&&     &&&&&&                   ",
  "                 &&&&&&     &&&&&&&&&      &&&&                  ",
  "                 &&&&&&                   &&&&                    ",
  "                  &&&&   &&&&            &&&&&                    ",
  "                   &&   &&&&&&&&&&&&&&&  &&&&                     ",
  "                   &&&& &&&&&&&&&&&&&&&  &&&                      ",
  "                    &&&&&&&&&&&&&&&&&&&  &&                       ",
  "                     &&   &&&&&&&&&&&&  &&                        ",
  "                       &   &&&&&&&&&&& &&                        ",
  "                                       &                         ",
  "                                                                 ",
];

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789ABCDEFZ";

const AsciiArt = () => {
  const [glitchLine, setGlitchLine] = useState(-1);
  const [matrixDrops, setMatrixDrops] = useState<
    { x: number; y: number; speed: number; char: string }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchLine(Math.floor(Math.random() * CHRIS.length));
      setTimeout(() => setGlitchLine(-1), 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cols = 20;
    const initial = Array.from({ length: cols }, (_, i) => ({
      x: Math.floor(Math.random() * 60) + i * 3,
      y: Math.floor(Math.random() * -20),
      speed: Math.random() * 2 + 1,
      char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
    }));
    setMatrixDrops(initial);

    const interval = setInterval(() => {
      setMatrixDrops((prev) =>
        prev.map((drop) => ({
          ...drop,
          y:
            drop.y > 22 ? Math.floor(Math.random() * -10) : drop.y + drop.speed,
          char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        })),
      );
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const glitchText = (text: string) => {
    return text
      .split("")
      .map((ch: string) =>
        Math.random() > 0.5
          ? MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
          : ch,
      )
      .join("");
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <div style={styles.matrixLayer}>
        {matrixDrops.map((drop, i) => (
          <span
            key={i}
            style={{
              ...styles.matrixChar,
              left: `${drop.x}ch`,
              top: `${drop.y}em`,
              opacity: 0.15 + Math.random() * 0.1,
            }}
          >
            {drop.char}
          </span>
        ))}
      </div>
      <div style={styles.scanline} />
      <pre style={styles.ascii}>
        {CHRIS.map((line, i) => (
          <div
            key={i}
            style={{
              ...styles.line,
              animationDelay: `${i * 0.1}s`,
              color: glitchLine === i ? "#ff0040" : undefined,
              textShadow:
                glitchLine === i
                  ? "0 0 10px #ff0040"
                  : "0 0 5px #00ff41, 0 0 10px #00ff41",
            }}
          >
            {glitchLine === i ? glitchText(line) : line}
          </div>
        ))}
      </pre>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    overflow: "hidden",
    padding: "10px 0",
    marginBottom: "10px",
  },
  matrixLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
  matrixChar: {
    position: "absolute",
    color: "#00ff41",
    fontFamily: "monospace",
    fontSize: "14px",
  },
  scanline: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "repeating-linear-gradient(0deg, rgba(0,255,65,0.03) 0px, rgba(0,255,65,0.03) 1px, transparent 1px, transparent 2px)",
    pointerEvents: "none",
    zIndex: 2,
  },
  ascii: {
    position: "relative",
    zIndex: 1,
    margin: 0,
    fontFamily: "monospace",
    fontSize: "6px",
    lineHeight: "1.5",
    color: "#00ff41",
    textAlign: "center",
    letterSpacing: "2px",
  },
  line: {
    animation: "none",
  },
};

export default AsciiArt;
