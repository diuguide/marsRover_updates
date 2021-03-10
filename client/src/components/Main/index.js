import PostDiv from "./Post";
import MailingList from "./Mailing";

const MainDiv = () => {
  return (
    <div className="containerMain">
      <div className="posts">
        <PostDiv />
      </div>
      <div className="mail-input">
        <MailingList />
      </div>
    </div>
  );
};
export default MainDiv;
