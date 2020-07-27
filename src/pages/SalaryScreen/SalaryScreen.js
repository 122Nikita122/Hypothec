import React from "react";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
// import "./SalaryScreen.css";

const headings = [
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

export function SalaryScreen() {
  return (
    <div className="main">
      <h2>{headings[1]}</h2>
      <p>
        Средняя сумма, которую вы
        <br /> получаете "на руки" в месяц.
      </p>
      <div>
        <Input inscription={"Средний ежемесячный доход"} />
        <Input inscription={"Банк на карту которого получаете зарплату"} />
      </div>
      <div className="button__block">
        <Button route={"Назад"} />
        <Button route={"Далее"} />
      </div>
    </div>
  );
}
