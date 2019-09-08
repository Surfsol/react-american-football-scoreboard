//TODO: STEP 1 - Import the useState hook.
//import React from "react";
import React, { useState } from "react"; //import useStat
import "./App.css";
import BottomRow from "./BottomRow";
import { __values } from "tslib";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [valueL, setValueL] = useState(0); //score starts at zero
  const touchdownL = e => {
    setValueL(valueL + 7);
  };
  const fieldgoalL = e => {
    setValueL(valueL + 3);
  };

  const [valueT, setValueT] = useState(0); //score starts at zero
  const touchdownT = e => {
    setValueT(valueL + 7);
  };
  const fieldgoalT = e => {
    setValueT(valueL + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{valueL}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{valueT}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchdownL}>
            Home Touchdown
          </button>
          <button onClick={fieldgoalL} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={touchdownT} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={fieldgoalT} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
