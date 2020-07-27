import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
import { SwitchGender } from "../../components/SwitchGender/SwitchGender.js";
import "./GenderBirthPlace.css";
import "../../components/Button/button.css";

const headings = [
  "Как вас зовут?",
  "Расскажите о себе",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

function mapStateToProps(state) {
  return {
    birthday: state.birthday,
    placebirthday: state.placebirthday,
  };
}

export const GenderBirthPlace = connect(mapStateToProps)(GenderBirthPlace_);

function GenderBirthPlace_({ birthday, placebirthday, dispatch }) {
  function changeState(event) {
    const { name, value } = event.target;
    const action = { type: "CHANGE_FIELD", key: name, value };
    dispatch(action);
  }
  return (
    <div className="FloorBirthPlace">
      <h2>{headings[1]}</h2>
      <SwitchGender />
      <Input
        className={"input"}
        inscription="Дата рождения"
        name="birthday"
        value={birthday}
        handleChange={changeState}
      />
      <Input
        className={"input"}
        inscription="Место рождения"
        name="placebirthday"
        value={placebirthday}
        handleChange={changeState}
      />
      <div className="buttons">
        <Button route={"Назад"} arrow={"left"} url={"/name"} />
        <Button
          route={"Далее"}
          arrow={"rigth"}
          url={"/doks"}
          disabled={birthday === "" || placebirthday === ""}
        />
      </div>
    </div>
  );
}
