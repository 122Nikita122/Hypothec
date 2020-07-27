import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import "./button.css";

export function Button(props) {
  // props.arrow ['left', 'right', 'none']

  const arrowClassName = {
    left: "button_left",
    rigth: "button_rigth",
  };

  if (props.disabled) {
    return (
      <div
        className={cn("button", arrowClassName[props.arrow], "button_disabled")}
      >
        {props.route}
      </div>
    );
  }

  return (
    <div>
      <Link
        className={cn("button", arrowClassName[props.arrow])}
        to={props.url}
      >
        {props.route}
      </Link>
    </div>
  );
}
