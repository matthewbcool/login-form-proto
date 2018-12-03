import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Signup from "../components/Signup";
import Login from "../components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
  }
  state = {
    toggleTab: true,
    textBoxOne: "svg"
  };

  changeTab = () => {
    this.state.toggleTab
      ? this.setState({ toggleTab: false })
      : this.setState({ toggleTab: true });
    this.addImgLocations();
  };

  addImgLocations = () => {
    this.setState({ textBoxOne: "text-box-one svg" });
  };

  render() {
    return (
      <div className="App">
        <div className="background-ux-window">
          <div className="background-ux-window-bar">
            <div className="mock-window-circle-container">
              <div className="mock-window-circles" />
              <div className="mock-window-circles" />
              <div className="mock-window-circles" />
            </div>
          </div>
          <div className="login-wrapper">
            <div className="tab-container">
              {this.state.toggleTab ? (
                <div
                  className="select-tab selected-tab"
                  onClick={this.changeTab}
                >
                  REGISTER
                </div>
              ) : (
                <div className="select-tab" onClick={this.changeTab}>
                  REGISTER
                </div>
              )}
              {this.state.toggleTab ? (
                <div className="select-tab" onClick={this.changeTab}>
                  LOG IN
                </div>
              ) : (
                <div
                  className="select-tab selected-tab"
                  onClick={this.changeTab}
                >
                  LOG IN
                </div>
              )}
            </div>
            {this.state.toggleTab ? <Signup /> : <Login />}
          </div>
          <img
            className="textboxes svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/KeG3-Textboxes.svg"
            }
            alt="textboxes-wire-frame"
          />
          <img
            className="svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/oRcK-profile-wire.svg"
            }
            alt="profile-wire"
          />
          <img
            className="svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/WbRW-image.svg"
            }
            alt="picture-wire-frame-one"
          />
          <img
            className="svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/8bqn-switches.svg"
            }
            alt="switches"
          />
          <img
            className="svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/WbRW-image.svg"
            }
            alt="picture-wire-frame-two"
          />
          <img
            className="svg"
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/WbRW-image.svg"
            }
            alt="picture-wire-frame-three"
          />
          <img
            className={this.state.textBoxOne}
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/KeG3-Textboxes.svg"
            }
            alt="textboxes-wire-frame"
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
