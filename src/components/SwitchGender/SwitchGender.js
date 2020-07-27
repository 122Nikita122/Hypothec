import React, { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    gender: state.gender,
  };
}

export const SwitchGender = connect(mapStateToProps)(SwitchGender_);

function SwitchGender_({ gender, dispatch }) {
  function changeState(value) {
    const action = { type: "CHANGE_FIELD", key: "gender", value };
    dispatch(action);
  }
  return (
    <div className="block_switchfloor">
      <button
        className={gender === "Женщина" ? "woman choice_woman" : "woman"}
        onClick={() => changeState("Женщина")}
      >
        Женщина
      </button>
      <button
        className={gender === "Мужчина" ? "man choice_man" : "man"}
        onClick={() => changeState("Мужчина")}
      >
        Мужчина
      </button>
    </div>
  );
}
