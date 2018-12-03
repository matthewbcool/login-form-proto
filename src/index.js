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
    toggleTab: false,
    currentTextBoxOne: "text-box-one-default text-box-one-start",

    currentProfilePic: "profile-pic-default profile-pic-start",
    currentSwitches: "switches-default switches-start",
    currentImageOne: "image-one-default image-one-start",
    currentBanner: "banner-default banner-start"
  };

  changeTab = () => {
    this.setSvgClasses();
    this.state.toggleTab
      ? this.setState({
          toggleTab: false
        })
      : this.setState({
          toggleTab: true
        });
  };

  setSvgClasses = () => {
    this.state.toggleTab
      ? this.setState({
          currentTextBoxOne: "text-box-one-default text-box-one-end",
          currentProfilePic: "profile-pic-default profile-pic-end",
          currentSwitches: "switches-default switches-end",
          currentImageOne: "image-one-default image-one-end",
          currentBanner: "banner-default banner-end"
        })
      : this.setState({
          currentTextBoxOne: "text-box-one-default text-box-one-start",
          currentProfilePic: "profile-pic-default profile-pic-start",
          currentSwitches: "switches-default switches-start",
          currentImageOne: "image-one-default image-one-start",
          currentBanner: "banner-default banner-start"
        });
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
                  className="reg-tab select-tab selected-tab"
                  onClick={this.changeTab}
                >
                  REGISTER
                </div>
              ) : (
                <div className="reg-tab select-tab" onClick={this.changeTab}>
                  REGISTER
                </div>
              )}
              {this.state.toggleTab ? (
                <div className="log-tab select-tab" onClick={this.changeTab}>
                  LOG IN
                </div>
              ) : (
                <div
                  className="log-tab select-tab selected-tab"
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
            className={this.state.currentProfilePic}
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/oRcK-profile-wire.svg"
            }
            alt="profile-wire"
          />
          <img
            className={this.state.currentBanner}
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/eGUj-welcomebanner.svg"
            }
            alt="banner"
          />
          <img
            className={this.state.currentImageOne}
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/WbRW-image.svg"
            }
            alt="wire-frame-one"
          />

          <img
            className={this.state.currentSwitches}
            src={
              "https://uploads.codesandbox.io/uploads/user/6b33088d-d1ff-4935-9b1e-8327c9a0dfa7/8bqn-switches.svg"
            }
            alt="switches"
          />
          <img
            className={this.state.currentTextBoxOne}
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
