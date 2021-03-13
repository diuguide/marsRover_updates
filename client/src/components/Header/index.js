const HeaderDiv = () => {
  return (
    <header>
      <nav>
        <div className="title">Perserverance Rover</div>
        <ul>
          <li>
            <a href="#posts">Updates</a>
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
            <a href="#images">Images</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDiv;
