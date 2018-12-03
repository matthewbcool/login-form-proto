import React from "react";
import "../src/styles.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="sign-up-container">
        <form>
          <div className="label-input-container">
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="E-mail"
            />
          </div>

          <div className="label-input-container">
            <input
              type="password"
              name="password-signup"
              className="form-input"
              placeholder="Password"
            />
          </div>

          <div className="label-input-container">
            <input
              type="password"
              name="repeat-pass-signup"
              className="form-input"
              placeholder="Repeat Password"
            />
          </div>
        </form>
      </div>
    );
  }
}
