import type { ReactNode } from "react";

export const Command = ({ children }: { children: ReactNode }) => {
  return <b style={{ color: "greenyellow" }}>{children}</b>;
};
