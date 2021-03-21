import { Link } from "react-router-dom";
import { useState } from 'react';
import PostModal from "../PostModal";

const HeaderDiv = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <PostModal show={show} setShow={setShow} />
      <nav>
        <div className="title">Perserverance Rover</div>
        <ul>
          <li>
            <div className="modalButton" onClick={handleShow}>
              Write Post
            </div>
          </li>
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
