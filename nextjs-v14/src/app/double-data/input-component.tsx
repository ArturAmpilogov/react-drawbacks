"use client";

import { useState } from "react";

export default function InputComponent() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
