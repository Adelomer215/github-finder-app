import React, { useContext, useState } from "react";
import { CLEAR_USERS, GET_USERS, SET_LOADING } from "../../context/Acctions";
import { AlertContext } from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
import { GithubContext } from "../../context/github/GithubContext";

const UserSearch = () => {
  const [Text, setText] = useState("");

  const { Users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Text.trim().length === 0 || Text === "") {
      setAlert("Please enter a github user name", "error");
    } else {
      dispatch({ type: SET_LOADING });
      const data = await searchUsers(Text);
      dispatch({
        type: GET_USERS,
        payload: data,
      });
      setText("");
    }
  };

  const handleClear = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-flow-col-2 ">
        <form onSubmit={handleSubmit}>
          <div className=" input-group ">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 w-full input  input-lg text-black"
                value={Text}
                onChange={handleText}
              />
              <button
                type="submit"
                className="btn btn-lg absolute top-0 right-0 rounded-l-none w-36"
              >
                go
              </button>
            </div>
          </div>
        </form>
        {Users.length > 0 && (
          <div>
            <button onClick={handleClear} className="btn btn-ghost btn-lg">
              clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearch;
