import React, { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

const RepoList = () => {
  const { Repos } = useContext(GithubContext);
  // console.log(Repos);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title capitalize">
          latest respositories
        </h2>
        {Repos.map((repo) => {
          return <RepoItem key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default RepoList;
