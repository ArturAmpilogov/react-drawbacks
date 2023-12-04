import { PropsWithChildren } from "react";

export default function Cell({ children }: PropsWithChildren<{}>) {
  console.log("Cell rendered, content:", children);

  return <td>{children}</td>;
}
