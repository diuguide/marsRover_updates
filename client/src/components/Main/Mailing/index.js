const MailingList = () => {
  return (
      <div className="mail-container">
          <div className="mail-title">
              <h3>Please Join our Mailing List!</h3>
          </div>
          <div className="email-input">
              <input type="text" id="email-list" placeholder="Enter Email"></input>
          </div>
          <div className="submit-email">
              <input className="btn-join" type="submit" id="submit-email" value="Join"></input>
          </div>
    </div>
  );
};
export default MailingList;
