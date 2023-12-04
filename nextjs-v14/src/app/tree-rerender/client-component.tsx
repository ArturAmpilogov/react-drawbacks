"use client";

import { useState } from "react";
import Table from "./table/table";
import Row from "./table/row";
import Cell from "./table/cell";

export default function ClientComponent({}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <p>Open the devtools console</p>
      <input
        className="border border-gray-400 rounded-md p-2 max-w-[300px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />

      <Table>
        <Row id="1">
          <Cell>A</Cell>
          <Cell>B</Cell>
          <Cell>C</Cell>
        </Row>
        <Row id="2">
          <Cell>D</Cell>
          <Cell>E</Cell>
          <Cell>F</Cell>
        </Row>
        <Row id="3">
          <Cell>G</Cell>
          <Cell>H</Cell>
          <Cell>I</Cell>
        </Row>
      </Table>
    </div>
  );
}
