const initState = {
  notes: {},
};

function notes(state = initState, action) {
  const xNotes = { ...state.notes };
  switch (action.type) {
    case "ADD_NOTE":
      console.log(action);
      return {
        notes: {
          ...state.notes,
          [action.payload._id]: action.payload,
        },
      };
    case "REMOVE_NOTE":
      delete xNotes[action.payload._id];
      return {
        notes: xNotes,
      };
    case "UPDATE_NOTE":
      xNotes[action.payload._id] = action.payload;
      return {
        notes: xNotes,
      };

    default:
      return state;
  }
}

export default notes;
