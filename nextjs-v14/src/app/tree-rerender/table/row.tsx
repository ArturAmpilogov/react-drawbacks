import { PropsWithChildren } from "react";

export default function Row({
  children,
  id,
}: PropsWithChildren<{ id: string }>) {
  console.log("Row rendered, id:", id);

  return <tr>{children}</tr>;
}
