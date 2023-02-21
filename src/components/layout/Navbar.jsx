import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral navbar text-neutral-content shadow-xl capitalize">
      <div className="container m-auto">
        <div className="logo items-center font-bold flex ">
          <FaGithub className="text-3xl mr-2  " />
          <Link to="/" className="capitalize">
            github finder
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link to={"/"} className="btn btn-ghost font-bold">
            home
          </Link>
          <Link to={"/about"} className="btn btn-ghost font-bold">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
