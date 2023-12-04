import { PropsWithChildren } from "react";

export default function Table({ children }: PropsWithChildren) {
  console.log("Table rendered");

  return (
    <table className="max-w-[300px]">
      <tbody>{children}</tbody>
    </table>
  );
}
