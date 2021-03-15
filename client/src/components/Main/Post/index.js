const PostDiv = ({ title, text1, source, img, alt }) => {
  return (
    <div className="post-container">
      <div className="post-title">{title}</div>
      <div className="post-content">
        <div className="post-img-container">
          <img className="post-img" src={img} alt={alt}></img>
        </div>
        <div className="post-text">
          <div className="main-text">{text1}</div>
          <div className="main-source">
            <span>Source: </span>
            <a rel="noreferrer" href={source} target="_blank">
              {source}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDiv;
