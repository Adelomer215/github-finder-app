import { CLEAR_USERS, GET_USER, GET_USERS, SET_LOADING } from "../Acctions";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        Loading: false,
        Users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        Repos: action.payload.userRepos,
        User: action.payload.userData,
        Loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        Users: [],
      };
    case SET_LOADING:
      return {
        ...state,
        Loading: true,
      };
    default:
      return state;
  }
};

export default GithubReducer;
