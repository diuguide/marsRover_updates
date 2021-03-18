const Apod = ({ imgUrl, imgDesc, imgType }) => {
  

  return (
    <div className="apod-container">
      <div className="apod-container-photo">
        {imgType === "video" ? (
          <iframe title="Astronomy Picture of the Day" id="apod-video" width="854px" height="480px" frameBorder="0" src={imgUrl} />
        ) : (
          <img id="apod-image" src={imgUrl} alt="Astronomy" />
        )}
      </div>
      <div className="apod-container-desc">{imgDesc}</div>
    </div>
  );
};
export default Apod;
