import React from "react";
import PropTypes from "prop-types";

function Difficulty({ setMode }) {
  const handleClick = (num) => {
    setMode(num);
  };

  return (
    <div className="difficulty">
      <button className="mode" type="button" onClick={() => handleClick(20)}>
        Easy 🐣
      </button>
      <br />
      <button className="mode" type="button" onClick={() => handleClick(10)}>
        Normal 🍵
      </button>
      <br />
      <button className="mode" type="button" onClick={() => handleClick(5)}>
        Hard 🤖
      </button>
    </div>
  );
}

Difficulty.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default Difficulty;
