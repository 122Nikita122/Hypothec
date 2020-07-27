import React from "react";
import NumberFormat from "react-number-format";
import "./Input.css";

export function InputNumber(props) {
  return (
    <div className="Input__block">
      <label className="label">{props.inscription}</label>
      <NumberFormat
        className={props.className} // старый input
        prefix={props.prefix}
        thousandSeparator={props.thousandSeparator}
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
}
export function Input(props) {
  return (
    <div className="Input__block">
      <label className="label">{props.inscription}</label>
      <input
        className={props.className} // старый input
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      ></input>
    </div>
  );
}
