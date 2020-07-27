import React from "react";
import { connect } from "react-redux";
import { Button } from "../../components/Button/Button.js";
import { Input } from "../../components/Input/Input.js";
import { Checkbox } from "../../components/Checkbox/Checkbox.js";
import "./CheckContact.css";
import { changeField, toggleCheckbox } from "../../actions";

const headings = [
  "Ипотека",
  "Как вас зовут?",
  "Ваш ежемесячный доход",
  "На карту какого банка получаете зарплату?",
  "Как вы сможете подтвердить свой ежемесячный доход?",
  "Раскажите немного о себе",
  "Проверьте контакты",
];

function mapStateToProps(state) {
  return {
    phone: state.phone,
    mail: state.mail,
    agreeCredit: state.agreeCredit,
    agreeAdvertising: state.agreeAdvertising,
    agreeStorage: state.agreeStorage,
    publicFigures: state.publicFigures,
    confirmationSms: state.confirmationSms,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeStatePhone(value) {
      dispatch(changeField("phone", value));
    },
    changeStateMail(value) {
      dispatch(changeField("mail", value));
    },
    changeStateAgreeCredit() {
      dispatch(toggleCheckbox("agreeCredit"));
    },
    changeStateAgreeAdvertising() {
      dispatch(toggleCheckbox("agreeAdvertising"));
    },
    changeStateAgreeStorage() {
      dispatch(toggleCheckbox("agreeStorage"));
    },
    changeStatePublicFigures() {
      dispatch(toggleCheckbox("publicFigures"));
    },
    changeStateConfirmationSms() {
      dispatch(toggleCheckbox("confirmationSms"));
    },
  };
}

export const CheckContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckContact_);

function CheckContact_({
  phone,
  mail,
  changeStatePhone,
  changeStateMail,
  changeStateAgreeCredit,
  changeStateAgreeAdvertising,
  changeStateAgreeStorage,
  changeStatePublicFigures,
  changeStateConfirmationSms,
}) {
  return (
    <div className="CheckContact">
      <h2>{headings[6]}</h2>
      <p>
        Убедитесь, что контакты введены корректно, они будут использоваться
        банками для коммуникации с вами
      </p>
      <Input
        inscription={"Ваш телефон"}
        name={"phone"}
        className={"input"}
        inputType="text"
        value={phone}
        handleChange={(event) => changeStatePhone(event.target.value)}
      />
      <Input
        inscription={"Ваша почта"}
        name={"mail"}
        className={"input"}
        inputType="text"
        value={mail}
        handleChange={(event) => changeStateMail(event.target.value)}
      />
      <div className="Checkbox_block">
        <div className={"Checkbox_block_point"}>
          <Checkbox
            titel={"Согласие на кредитный отчет"}
            className={"custom-checkbox__point"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            onClick={changeStateAgreeCredit}
          />
          <div className={"hatch"}></div>
        </div>
        <div className={"Checkbox_block_point"}>
          <Checkbox
            titel={"Согласие на рекламную коммуникацию"}
            className={"custom-checkbox__point"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            onClick={changeStateAgreeAdvertising}
          />
          <div className={"hatch"}></div>
        </div>
        <div className={"Checkbox_block_point"}>
          <Checkbox
            titel={"Согласие на хранение данных"}
            className={"custom-checkbox__point"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            onClick={changeStateAgreeStorage}
          />
          <div className={"hatch"}></div>
        </div>
        <div className={"Checkbox_block_point"}>
          <Checkbox
            titel={"Нет родственников публичных лиц "}
            className={"custom-checkbox__point"}
            className_titel={"checkbox__titel"}
            className_info={"checkbox__info"}
            onClick={changeStatePublicFigures}
          />
          <div className={"hatch"}></div>
        </div>
        <Checkbox
          titel={"Подтверждение по СМС"}
          className={"custom-checkbox__point"}
          className_titel={"checkbox__titel"}
          className_info={"checkbox__info"}
          onClick={changeStateConfirmationSms}
        />
      </div>

      <div className="buttons">
        <Button route={"Назад"} arrow={"left"} url={"/abautyou"} />
        <Button
          route={"Отправить"}
          arrow={"rigth"}
          disabled={phone === "" || mail === ""}
        />
      </div>
    </div>
  );
}
