import PostDiv from "./Post";
import MailingList from "./Mailing";
import postData from "../../textData/posts";

const MainDiv = () => {
  return (
    <div className="containerMain">
      <div id="posts" className="posts">
        {postData.posts.map((post, index) => {
          console.log("post from map:", post.source);
          return (
              <PostDiv key={index}
              title={post.title}
              text1={post.text1}
              source={post.source}
              img={post.img}
              alt={post.alt}
            />
          );
        })}
      </div>
      <div className="mail-input">
        <MailingList />
      </div>
    </div>
  );
};
export default MainDiv;
