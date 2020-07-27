import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import { Select } from "../../components/Select/Select.js";
import "./MilitaryService.css";
import "../../components/Button/button.css";
import { changeField } from "../../actions";

const headings = [
  "Как вас зовут?",
  "Расскажите о себе",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  ", расскажите про ваше отношение к воинской службе",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

const list = {
  nonLiable: "Невоеннобязанный",
  notserve: "Не служил",
  postponement: "Отсрочка от службы",
  serviceman: "Военнослужащий",
};

function mapStateToProps(state) {
  return {
    military: state.military,
    firstName: state.firstName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateMilitary(value) {
      dispatch(changeField("military", value));
    },
  };
}

export const MilitaryService = connect(
  mapStateToProps,
  mapDispatchToProps
)(MilitaryService_);

export function MilitaryService_(
  { military, firstName, changeStateMilitary },
  state
) {
  return (
    <div className="MilitaryService">
      <h2>{firstName + headings[4]}</h2>
      <leybel className="select_block_leybel">
        Ваш статус военнообязанного
      </leybel>
      <div className="select_block MilitaryService_margin">
        <Select list={list} onChange={changeStateMilitary} value={military} />
      </div>
      <div className="buttons">
        <Button route={"Назад"} arrow={"left"} url={"/bankcard"} />
        <Button
          route={"Далее"}
          arrow={"rigth"}
          url={"/abautyou"}
          disabled={military === ""}
        />
      </div>
    </div>
  );
}
