const PostDiv = ({ title, text1, text2, source, img }) => {
    return (
        <div className="post-container">
            <div className="post-title">
            {title}
            </div>
            <div className="post-content">
                <div className="post-img-container">
                    <img className="post-img"></img>
                    <a className="post-img-link" href="#" target="_blank"></a>
                </div>
                <div className="post-text">
                    <div className="main-text">{text1}</div>
                    <div className="main-text">{text2}</div>
                    <div className="main-source">{source}</div>
                </div>
            </div>
        </div>
    )
}
export default PostDiv;