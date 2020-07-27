import React, { useState, useReducer } from "react";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import { Select } from "../../components/Select/Select.js";
import "./Town.css";
import "../../components/Button/button.css";

const headings = [
  "Как вас зовут?",
  "Расскажите о себе",
  "В каком городе покупаете квартиру?",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

export function Town() {
  const [stayt, setStayt] = useState("");
  console.log(stayt);
  return (
    <div className="town">
      <h2>{headings[2]}</h2>
      <Input
        name={"town"}
        className="input gray"
        value={stayt}
        handleChange={(event) => setStayt(event.target.value)}
      />
      <p className="town_choice">Вы планируете приобретать недвижимость в</p>
      <p className="town_name">{stayt}</p>
      <p className="town_sentence">
        Вам будут показаны предложения со ставкой для этого региона
      </p>
      <div className="buttons">
        <Button route={"Назад"} className="button__block_1" />
        <Button route={"Далее"} className="button__block_2" />
      </div>
    </div>
  );
}
