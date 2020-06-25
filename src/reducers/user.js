const initState = {
  name: null,
  email: null,
};

function user(state = initState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      console.log(action);
      return {
        auth: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default user;
