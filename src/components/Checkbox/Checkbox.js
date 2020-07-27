import React from "react";

export function Checkbox(props) {
  return (
    <label className="Flag">
      <input
        type="checkbox"
        className={props.className} //"custom-checkbox"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      ></input>
      <div for="flag"></div>
      <div>
        <p className={props.className_titel}>{props.titel}</p>
        <p className={props.className_info}>{props.info}</p>
      </div>
    </label>
  );
}
