"use client";

import { PropsWithChildren, useState } from "react";

export default function ClientComponentWrapper({
  children,
}: PropsWithChildren<{}>) {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex flex-col gap-4">
      <button
        className="bg-yellow-300 px-4 py-2"
        onClick={() => setVisible((prev) => !prev)}
      >
        Toggle visibility
      </button>
      <div className={visible ? "visible" : "invisible"}>{children}</div>
    </div>
  );
}
