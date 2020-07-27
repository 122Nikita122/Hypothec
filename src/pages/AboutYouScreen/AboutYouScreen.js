import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import { Select } from "../../components/Select/Select.js";
import "./AboutYouScreen.css";
import "../../components/Button/button.css";
import {
  changeField,
  toggleCheckbox,
  changeCointKidsDi,
  changeCointKidsIn,
} from "../../actions";

const headings = [
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

const listMan = {
  married: "Женат",
  single: "Холост",
  divorced: "Разведен",
  widower: "Вдовец",
  "Married, have a prenuptial agreement": "Женат, есть брачный договор",
};
const listWoman = {
  married: "Замужем",
  single: "Незамужем",
  divorced: "Разведена",
  widower: "Вдова",
  "Married, have a prenuptial agreement": "Замужем, есть брачный договор",
};

function mapStateToProps(state) {
  return {
    countKids: state.countKids,
    bornbefore: state.bornbefore,
    invalid: state.invalid,
    married: state.married,
    gender: state.gender,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateMarried(value) {
      dispatch(changeField("married", value));
    },
    changeStateBornbefore() {
      dispatch(toggleCheckbox("bornbefore"));
    },
    changeStateInvalid() {
      dispatch(toggleCheckbox("invalid"));
    },
    changeCountKidsDicriment() {
      dispatch(changeCointKidsDi("countKids"));
    },
    changeCountKidsIncriment() {
      dispatch(changeCointKidsIn("countKids"));
    },
  };
}

export const AboutYouScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutYouScreen_);

function AboutYouScreen_({
  countKids,
  married,
  changeStateMarried,
  changeStateBornbefore,
  changeStateInvalid,
  changeCountKidsDicriment,
  changeCountKidsIncriment,
  gender,
}) {
  return (
    <div className="AboutYouScreen">
      <h2>{headings[3]}</h2>
      <div className="select_block">
        <Select
          onChange={changeStateMarried}
          value={married}
          list={gender === "Женщина" ? listWoman : listMan}
        />
      </div>
      <div className="KidsBlock">
        <ButtonKids
          className="ButtonKidsMinus"
          disabled={countKids === 0}
          onClick={changeCountKidsIncriment}
        />
        <div className="KidsBlock__div">
          <span className="KidsBlock_span">Дети младше 18 лет</span>
          <dive className="KidsBlock_input">
            <p>{countKids}</p>
          </dive>
        </div>
        <ButtonKids
          className="ButtonKidsPlus"
          onClick={changeCountKidsDicriment}
        />
      </div>
      <div>
        <div>
          <Checkbox
            className={"custom-checkbox"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            titel={"Ребенок родился в 2018 или позже"}
            info={"В этом случае вам доступны программы с господдержкой"}
            onClick={changeStateBornbefore}
          />
          <Checkbox
            className={"custom-checkbox"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            titel={"У ребенка инвалидность"}
            info={"В этом случае вам доступны программы с господдержкой"}
            onClick={changeStateInvalid}
          />
        </div>
      </div>

      <div className="buttons">
        <Button route={"Назад"} arrow={"left"} url={"/military"} />
        <Button
          route={"Далее"}
          arrow={"rigth"}
          url={"/checkContact"}
          disabled={married === ""}
        />
      </div>
    </div>
  );
}

function ButtonKids(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    ></button>
  );
}
