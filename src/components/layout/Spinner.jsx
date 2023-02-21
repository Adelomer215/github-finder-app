import React from "react";
import SpinnerImg from "./assets/spinner.gif";
const Spinner = () => {
  return (
    <div>
      <img
        className="text-center mx-auto"
        width={280}
        src={SpinnerImg}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
