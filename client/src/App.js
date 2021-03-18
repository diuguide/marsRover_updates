//REACT UTILS
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import HeaderDiv from "./components/Header";
import MainDiv from "./components/Main";
import Apod from "./components/APOD";

//REDUX
import { ACTIONS } from "./store/redux";
import { loadApod } from "./utilities/util";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

//SCSS
import "./scss/App.scss";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store, shallowEqual);
  console.log("store in app.js:", store);
  let stopper = 0;
  useEffect(() => {
    dispatch({type: ACTIONS.LOADING });
    loadApod()
      .then((info) => {
       dispatch({
      type: ACTIONS.LOAD_APOD,
      payload: info
       });
      })
      .catch((err) => console.log("Error useEffect: ", err));
  }, [stopper]);

  return (
    <>
      <HeaderDiv />
      <div className="seperator"></div>
      {/* <Switch>
        <Route exact path="/" component={MainDiv} />
        <Route
          exact
          path="/APOD"
          render={(props) => (
            <Apod {...props}  imgUrl={imgUrl} imgDesc={imgDesc} imgType={imgType} />
          )}
        />
      </Switch> */}
    </>
  );
}

export default App;
