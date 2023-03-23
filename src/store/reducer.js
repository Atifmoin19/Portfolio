import { legacy_createStore as createStore } from "redux";
const initialState = {
  userId: "atifmoin",
  token: "asdfd3e1ghjk2asdasd34567890daa",
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default createStore(reducer);
