import React from "react";

// Test copy

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Your message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn bright">
            Sign in
          </button>
        </form>
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
