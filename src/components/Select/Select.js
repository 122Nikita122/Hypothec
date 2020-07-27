import React, { useState } from "react";
import "./select.css";

export function Select(props) {
  const [collapsed, setCollapsed] = useState(true);
  function change(x) {
    props.onChange(x);
    setCollapsed(true);
  }
  if (!collapsed) {
    return (
      <div className="select_collapsed">
        {Object.keys(props.list).map((x) => (
          <li className="select_block__li collapsed" onClick={() => change(x)}>
            {props.list[x]}
          </li>
        ))}
      </div>
    );
  }
  return (
    <div className="select_block_empty" onClick={() => setCollapsed(false)}>
      <span>{props.list[props.value]}</span>
    </div>
  );
}
