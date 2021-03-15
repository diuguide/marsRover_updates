import { Link } from "react-router-dom";

const HeaderDiv = () => {
  return (
    <header>
      <nav>
        <div className="title">Perserverance Rover</div>
        <ul>
          <li>
            <Link to="/">Updates</Link>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://mars.nasa.gov/mars2020/"
            >
              Perserverance NASA Website
            </a>
          </li>
          <li>
           <Link to="/APOD">APOD</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDiv;
