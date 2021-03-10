import PostDiv from "./Post";
import MailingList from "./Mailing";
import postData from "../../textData/posts";

const MainDiv = () => {
  console.log("post Data: ", postData.posts);
  return (
    <div className="containerMain">
      <div className="posts">
              {postData.posts.map((post, index) => {
            console.log("post from map:", post.source)
            return (
            <PostDiv
              title={post.title}
              text1={post.text1}
              text2={post.text2}
              source={post.source}
              img={post.img}
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
