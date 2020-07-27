import { createStore } from "redux";

const initialState = {
  firstName: "",
  lastName: "",
  middlename: "",
  birthday: "",
  placebirthday: "",
  gender: "Женщина",
  married: "",
  countKids: 0,
  bornbefore: false,
  invalid: false,
  salary: "",
  doks: "ndfl",
  bank: "",
  military: "",
  phone: "",
  mail: "",
  agreeCredit: false,
  agreeAdvertising: false,
  agreeStorage: false,
  publicFigures: false,
  confirmationSms: false,
};

function reducer(state, action) {
  if (action.type === "CHANGE_FIELD") {
    return {
      ...state,
      [action.key]: action.value,
    };
  }
  if (action.type === "TOGGLE_CHECKBOX") {
    return {
      ...state,
      [action.name]: !state[action.name],
    };
  }
  if (action.type === "DICRIMENT_CHILDREN") {
    return {
      ...state,
      countKids: state.countKids + 1,
    };
  }
  if (action.type === "INCRIMENT_CHILDREN") {
    return {
      ...state,
      countKids: state.countKids - 1,
    };
  }

  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
});
