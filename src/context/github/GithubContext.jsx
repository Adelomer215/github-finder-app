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
  // const setLoading = () => dispatch({ type: SET_LOADING });
  // const searchUsers = async (text) => {
  //   // setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const respons = await fetch(
  //     `${VITE_GITHUB_API_URL}/search/users?${params}`,
  //     {
  //       headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
  //     }
  //   );

  //   const { items } = await respons.json();

  //   dispatch({
  //     type: GET_USERS,
  //     payload: items,
  //   });
  // };

  // const getUser = async (login) => {
  //   // setLoading();

  //   const respons = await fetch(`${VITE_GITHUB_API_URL}/users/${login}`, {
  //     headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
  //   });

  //   if (respons.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await respons.json();

  //     dispatch({
  //       type: GET_USER,
  //       payload: data,
  //     });
  //   }
  // };

  // const clearUsersList = () =>
  //   dispatch({
  //     type: CLEAR_USERS,
  //   });

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
