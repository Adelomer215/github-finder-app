import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

const UserList = () => {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const VITE_REACT_APP_GITHUB_TOOKEN =
    "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";
  const VITE_GITHUB_API_URL = "https://api.github.com";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const respons = await fetch(`${VITE_GITHUB_API_URL}/users`, {
      headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
    });
    const data = await respons.json();
    setUsers(data);
    setLoading(false);
  };

  if (Loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 xl:grid-flow-col-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {Users.map((user) => {
        return <h1 key={user.id}>{user.login}</h1>;
      })}
    </div>
  );
};

export default UserList;
