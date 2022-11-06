import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [personName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "personName") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div>
        <form className="form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                value={email}
                name="email"
                type="email"
                placeholder="Email"
                onBlur={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                value={personName}
                name="personName"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Your message:</label>
              <textarea
                value={message}
                name="message"
                type="text"
                rows="3"
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn bright"
            onClick={handleFormSubmit}
          >
            Send
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="container">
        <ul>
          <li>
            <a href="tel:+8588764217">(858) 876-4217</a>
          </li>
          <li>
            <a href="mailto: aurum.elean@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eleanor-gold-a1a3b9111/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/aurumbright">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
