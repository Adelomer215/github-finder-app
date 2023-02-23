import React, { useContext } from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="card flex-row items-center shadow-lg">
      <div className="avatar h-16 w-16">
        <img
          src={user.avatar_url}
          className="rounded-full shadow-lg"
          alt="user avatar"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{user.login}</h2>
        <Link
          className="text-base-content text-opacity-75"
          to={`/user/${user.login}`}
        >
          viste profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
