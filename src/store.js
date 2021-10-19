// import { useEffect } from "react";
import { createStore } from "redux";
// import { useDispatch } from "react-redux";
// import Workout from "./components/workout/workout";
// import * as WorkoutService from "./services/workouts.service";

const initialState = {
  user: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "app/user/setid":
      return { ...state, user: { id: action.data} };
    default:
      return state;
  }
}


const setUserId = (userId) => {
  return {
    type: "app/user/setid",
    data: userId,
  };
};

const getUserId = (state) => state.user.id

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
  store,
  setUserId,
  getUserId
};
