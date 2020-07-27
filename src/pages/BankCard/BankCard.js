import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import sber from "../../img/Sber.png";
import vtb from "../../img/VTB.png";
import alfa from "../../img/Alfa.png";
import rayfazen from "../../img/Raif.png";
import gazprom from "../../img/Gazprom.png";
import otkrytie from "../../img/Otkitie.png";
import rosbank from "../../img/Rosbank-dom.png";
import rosselhoz from "../../img/Rosselh.png";
import unikredet from "../../img/Unicredit.png";
import promsvyz from "../../img/Unicredit.png";
import others from "../../img/Other.png";
import onhands from "../../img/Text.png";
import "./BankCard.css";
import { changeField } from "../../actions";

const headings = [
  "Ипотека",
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "На карту какого банка получаете зарплату?",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

let list_bank = [
  { id: "sber", name: "CберБанк", src: sber },
  { id: "vtb", name: "Втб", src: vtb },
  { id: "alfa", name: "Альфабанк", src: alfa },
  { id: "rayfazen", name: "Райффайзенбанк", src: rayfazen },
  { id: "gazprom", name: "Газпромбанк", src: gazprom },
  { id: "otkrytie", name: "Открытие", src: otkrytie },
  { id: "rosbank", name: "Росбанк", src: rosbank },
  { id: "rosselhoz", name: "Россельхозбанк", src: rosselhoz },
  { id: "unikredet", name: "ЮниКредит Банк", src: unikredet },
  { id: "promsvyz", name: "Промсвязьбанк", src: promsvyz },
  { id: "others", name: "Другие банки", src: others },
  { id: "onhands", name: "Наличные на руки", src: onhands },
];

function mapStateToProps(state) {
  return {
    bank: state.bank,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStateBank(value) {
      dispatch(changeField("bank", value));
    },
  };
}

export const BankCard = connect(mapStateToProps, mapDispatchToProps)(BankCard_);

function BankCard_({ bank, changeStateBank }) {
  return (
    <div className="BankCard">
      <h2>{headings[3]}</h2>
      {list_bank.map((x) => (
        <Bank
          namebank={x.name}
          src={x.src}
          className="BankCard_input"
          className_bank={bank === x.id ? "Bank_block choice" : "Bank_block"}
          className_label="BankCard_label"
          value={x.id}
          hadelBank={() => changeStateBank(x.id)}
          id={x.id}
          for={x.id}
        />
      ))}
      <div className="buttons">
        <Button route={"Назад"} arrow={"left"} url={"/doks"} />
        <Button
          route={"Далее"}
          arrow={"rigth"}
          url={"/military"}
          disabled={bank === ""}
        />
      </div>
    </div>
  );
}

function Bank(props) {
  return (
    <div className={props.className_bank}>
      <div>{<img src={props.src} />}</div>
      <input
        className={props.className}
        type={"checkbox"}
        id={props.id}
        value={props.value}
        onChange={props.hadelBank}
      ></input>
      <label for={props.for} className={props.className_label}>
        {props.namebank}
      </label>
    </div>
  );
}
