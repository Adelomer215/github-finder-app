import React, { createContext, useReducer, useState } from "react";
import { CLEAR_USERS, GET_USER, GET_USERS, SET_LOADING } from "../Acctions";
import GithubReducer from "./GithubReducer";

const VITE_REACT_APP_GITHUB_TOOKEN = "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";
const VITE_GITHUB_API_URL = "https://api.github.com";

export const GithubContext = createContext();

const GithubContextProvider = ({ children }) => {
  const initState = {
    Loading: false,
    Users: [],
    User: {},
    Repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initState);

  const { Users, Repos, Loading, User } = state;

  return (
    <GithubContext.Provider
      value={{
        Users,
        User,
        Repos,
        Loading,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
