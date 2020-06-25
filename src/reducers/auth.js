const initState = {
  token: null,
  expires: null,
};

function auth(state = initState, action) {
  switch (action.type) {
    case "UPDATE_TOKEN":
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

export default auth;
