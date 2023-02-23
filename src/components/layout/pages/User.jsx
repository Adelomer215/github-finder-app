import React, { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { GET_USER, SET_LOADING } from "../../../context/Acctions";
import { getUser, getUserRepos } from "../../../context/github/GithubActions";
import { GithubContext } from "../../../context/github/GithubContext";
import RepoList from "../../repo/RepoList";
import Spinner from "../Spinner";

const User = () => {
  const { User, Loading, dispatch } = useContext(GithubContext);
  const params = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = User;

  useEffect(() => {
    dispatch({
      type: SET_LOADING,
    });

    const getUserData = async () => {
      const userData = await getUser(params.login);
      const userRepos = await getUserRepos(login);
      dispatch({
        type: GET_USER,
        payload: { userData, userRepos },
      });
    };

    getUserData();
  }, []);

  if (Loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            back to search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image md-6 md:mb-0 shadow-xl p-2">
            <div className="rounded-lg shadow-lg card image-full">
              <figure>
                <img src={avatar_url} alt={avatar_url} />
              </figure>
            </div>
            <div className="p-2 text-sm text-red-700">
              <h2 className="card-title mb-0">{name}</h2>{" "}
              <p className="flex-grow-0">{login}</p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">website</div>
                  <a
                    href={`https://${blog}`}
                    target="_blank"
                    rel="noreferrer"
                    className="stat-value text-lg"
                  >
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">twitter</div>
                  <a
                    className="stat-value text-lg"
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="stat uppercase">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>{" "}
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>
            <div className="stat uppercase">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">following</div>{" "}
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>
            <div className="stat uppercase">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">publick repos</div>{" "}
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>
            <div className="stat uppercase">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">publick gists</div>{" "}
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>

        <RepoList />
      </div>
    </>
  );
};

export default User;
