import React from "react";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import "./ContactsScreen.css";

const headings = [
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

export function ContactsScreen() {
  return (
    <div className="AboutYouScreen">
      {/*придумать более универсальное название*/}
      <h2>{headings[3]}</h2>
      <p>
        Убедитесь, что контакты введены корректно, они будут использоваться
        банками для коммуникации с вами
      </p>
      <div>
        <Input inscription={"Ваш телефон"} />
        <Input inscription={"Ваша почта"} />
      </div>
      <div className="Chexkbox_block">
        <Checkbox titel={"Согласие на кредитный отчет"} />
        <Checkbox titel={"Согласие на рекламную коммуникацию"} />
        <Checkbox titel={"Согласие на хранение данных"} />
        <Checkbox titel={"Нет родственников публичных лиц"} />
        <Checkbox titel={"Согласие на кредитный отчет"} />
      </div>
      <div className="button__block">
        <Button route={"Назад"} />
        <Button route={"Далее"} />
      </div>
    </div>
  );
}
