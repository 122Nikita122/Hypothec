import React from "react";
import { connect } from "react-redux";
import "./StartPage.css";
import bender from "../../img/bender.png";

const headings = [
  "Ипотека",
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

export function StartPage() {
  return (
    <div className="startpage">
      <h2>{headings[0]}</h2>
      <p>
        Поможем узнать реальные ставки
        <br /> и получить решение по ипотеке,
        <br /> не выходя из дома.
      </p>

      <p>
        Услуга бесплатна для вас — <br />
        нам платят банки
      </p>
      <img src={bender}></img>
      <a className="startpage__button" href="/name">
        Интересно
      </a>
    </div>
  );
}
