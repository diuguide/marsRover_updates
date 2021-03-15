import axios from "axios";
import { useState } from "react";

const MailingList = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/add", { email: email }).then((response) => {
        console.log(response);
        if (response.data.error === "2") {
            alert('Error: Email has already been added to our list');
        } else if (response.data.error === "1") {
            alert('Error: Please enter an email address');
        } else {
            alert(`${response.data.newEmail.email} has been added to our list!`);
        }
      setEmail("");
    });
  };

  return (
    <div className="mail-container">
      <div className="mail-title">
        <h3>Please Join our Mailing List!</h3>
      </div>
      <div className="email-form">
        <input
          onChange={handleChange}
          value={email}
          type="text"
          id="email-list"
          placeholder="Enter Email"
        ></input>
      </div>
      <div className="submit-email">
        <input
          onClick={handleSubmit}
          className="btn-join"
          type="submit"
          id="submit-email"
          value="Join"
        ></input>
      </div>
    </div>
  );
};
export default MailingList;
