export function acAddNote(pData) {
  return {
    type: "ADD_NOTE",
    payload: pData,
  };
}

export function acRemoveNote(pData) {
  return {
    type: "REMOVE_NOTE",
    payload: pData,
  };
}

export function acUpdateNote(pData) {
  return {
    type: "UPDATE_NOTE",
    payload: pData,
  };
}
