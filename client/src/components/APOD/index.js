import { shallowEqual, useSelector } from "react-redux";

const Apod = () => {
  const store = useSelector((store) => store, shallowEqual);
  let data = store.apod.data;
  return (
    <div className="apod-container">
      <div className="apod-title"><h2>Astronomy Picture of the Day</h2></div>
      <div className="apod-container-photo">
        
        {data.media_type === "video" ? (
          <iframe
            title="Astronomy Picture of the Day"
            id="apod-video"
            width="854px"
            height="480px"
            frameBorder="0"
            src={data.url}
          />
        ) : (
          <img id="apod-image" src={data.url} alt="Astronomy" />
        )}
      </div>
      <div className="apod-container-desc">
        <div className="apod-container-title">
          <h3>Title: </h3>
          <p>{data.title}</p>
        </div>
        <div className="apod-container-explanation">
          <p><h3>Description: </h3>
          {data.explanation}</p>
        </div>
        <div className="apod-container-date">
          <h3>Date: </h3>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Apod;
