import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
import "./NameScreen.css";

const headings = [
  "Как вас зовут?",
  'Ваш ежемесячный доход в ООО"АЙРИЭЛТОР"',
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

function mapStateToProps(state) {
  return {
    name: state.firstName,
    surname: state.lastName,
    middlename: state.middlename,
  };
}

export const NameScreen = connect(mapStateToProps)(NameScreen_);

function NameScreen_({ name, surname, middlename, dispatch }) {
  function changeState(event) {
    const { name, value } = event.target;
    const action = { type: "CHANGE_FIELD", key: name, value };
    dispatch(action);
  }
  return (
    <div className="main">
      <h2>{headings[0]}</h2>
      <p>
        Заполнить как в паспорте,
        <br /> это важно для банка
      </p>
      <div>
        <Input
          className={"input"}
          name="lastName"
          inscription="Фамилия"
          value={surname}
          handleChange={changeState}
        />
        <Input
          className={"input"}
          name="firstName"
          inscription="Имя"
          value={name}
          handleChange={changeState}
        />
        <Input
          name="middlename"
          inscription="Отчество"
          className={"input"}
          value={middlename}
          handleChange={changeState}
        />
      </div>
      <div className="buttons namescreen_button">
        <Button
          route={"Далее"}
          arrow={"rigth"}
          url={"/Gender"}
          disabled={name === "" || surname === "" || middlename === ""}
        />
      </div>
    </div>
  );
}
