import React, { useContext, useEffect } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserList = () => {
  const { Loading, Users } = useContext(GithubContext);

  if (Loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 xl:grid-flow-col-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {Users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
