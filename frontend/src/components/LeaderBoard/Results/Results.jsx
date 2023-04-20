import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import cup from "../../../assets/LeaderBoard/cup.png";

function Results({ pseudo }) {
  const results = [
    {
      date: "2023/04/06",
      time: "15:26",
      name: "Lucas",
      points: 2,
    },
    {
      date: "2023/04/02",
      time: "13:27",
      name: "Jeremy",
      points: 1,
    },
    {
      date: "2023/03/03",
      time: "09:57",
      name: "Antonin",
      points: 1,
    },
    {
      date: "2023/04/01",
      time: "11:54",
      name: "Marah",
      points: 0,
    },
  ];

  const location = useLocation();
  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString();
  const currentTimeString = currentDate.toLocaleTimeString();

  const actualScore = {
    date: currentDateString,
    time: currentTimeString,
    name: pseudo,
    points: location.state.resultat,
  };

  results.push(actualScore);

  const bestScore = results.sort((a, b) => (a.points < b.points ? 1 : -1));

  const [bestScoreReached, setBestScoreReached] = useState(false);

  if (bestScore[0].name === pseudo && !bestScoreReached) {
    setBestScoreReached(true);
  }

  return (
    <div className="results">
      <br />
      <h1>Well done {pseudo}!</h1>
      <br />
      <img src={cup} alt="cup" />
      <br />
      <div>
        <div className="result1">
          <div>
            <p>{bestScore[0].name}</p>
            <p className="opacity">
              {bestScore[0].date}&ensp;{bestScore[0].time}
            </p>
          </div>
          <p>{bestScore[0].points}&ensp;pts</p>
        </div>
        <br />
        <div className="result2">
          <div>
            <p>{bestScore[1].name}</p>
            <p className="opacity">
              {bestScore[1].date}&ensp;{bestScore[1].time}
            </p>
          </div>
          <p>{bestScore[1].points}&ensp;pts</p>
        </div>
        <br />
        <div className="result3">
          <div>
            <p>{bestScore[2].name}</p>
            <p className="opacity">
              {bestScore[2].date}&ensp;{bestScore[2].time}
            </p>
          </div>
          <p>{bestScore[2].points}&ensp;pts</p>
        </div>
        <br />
        <div className="result4">
          <div>
            <p>{bestScore[3].name}</p>
            <p className="opacity">
              {bestScore[3].date}&ensp;{bestScore[3].time}
            </p>
          </div>
          <p>{bestScore[3].points}&ensp;pts</p>
        </div>
      </div>
      {bestScoreReached && <Confetti />}
      <br />
    </div>
  );
}

Results.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Results;
