import PostDiv from "./Post";
import MailingList from "./Mailing";
import postData from "../../textData/posts";
import Twitter from "./Twitter";
import { useState, useRef, useEffect } from 'react';
import { loadPosts } from '../../utilities/util';

const MainDiv = () => {
  const [isLoading, setIsLoading] = useState(true);
  const callData = useRef();
  useEffect(() => {
    loadPosts().then(response => {
      callData.current = response.data;
      setIsLoading(false);
    })
  })
  if (isLoading) {
    return <div className="loadingPage"><h1>LOADING...</h1></div>
  }
  return (
    <div className="containerMain">
      <div id="posts" className="posts">
        {callData.current.reverse().map((post, index) => {
          return (
              <PostDiv key={index}
              title={post.title}
              text={post.text}
              source={post.source}
              img={post.img}
              alt={post.alt}
            />
          );
        })}
      </div>
      <div className="side-bar">
        <MailingList />
        <Twitter />
      </div>
    </div>
  );
};
export default MainDiv;
