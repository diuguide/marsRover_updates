import "./scss/App.scss";
import HeaderDiv from "./components/Header";
import MainDiv from "./components/Main";

function App() {
  return (
    <>
      <HeaderDiv />
      <div className="seperator"></div>
      <MainDiv />
    </>
  );
}

export default App;
