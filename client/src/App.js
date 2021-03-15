import "./scss/App.scss";
import HeaderDiv from "./components/Header";
import MainDiv from "./components/Main";
import Apod from "./components/APOD";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  let imgUrl;
  let imgDesc;
  let imgType;
  
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}&date=2021-3-10`
    )
    .then((data) => {
      console.log(data);
      imgUrl = data.data.url;
      imgDesc = data.data.explanation;
      imgType = data.data.media_type;
    });
  return (
    <>
      <HeaderDiv />
      <div className="seperator"></div>
      <Switch>
        <Route exact path="/" component={MainDiv} />
        <Route
          exact
          path="/APOD"
          render={(props) => (
            <Apod {...props}  imgUrl={imgUrl} imgDesc={imgDesc} imgType={imgType} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
