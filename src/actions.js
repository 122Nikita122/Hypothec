export function changeField(key, value) {
  return {
    type: "CHANGE_FIELD",
    key,
    value,
  };
}

export function toggleCheckbox(name) {
  return {
    type: "TOGGLE_CHECKBOX",
    name,
  };
}

export function changeCointKidsDi(key) {
  return {
    type: "DICRIMENT_CHILDREN",
    key,
  };
}

export function changeCointKidsIn(key) {
  return {
    type: "INCRIMENT_CHILDREN",
    key,
  };
}
