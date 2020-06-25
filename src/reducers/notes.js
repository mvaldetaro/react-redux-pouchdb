const initState = {
  data: {},
};

function notes(state = initState, action) {
  const xNotes = { ...state.data };

  switch (action.type) {
    case "ADD_NOTE":
      return {
        data: {
          ...state.data,
          [action.payload._id]: action.payload,
        },
      };
    case "REMOVE_NOTE":
      delete xNotes[action.payload._id];
      return {
        data: xNotes,
      };
    case "UPDATE_NOTE":
      xNotes[action.payload._id] = action.payload;
      return {
        data: xNotes,
      };

    default:
      return state;
  }
}

export default notes;
