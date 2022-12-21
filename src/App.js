import React from "react";

import HomeView from "./CustomComponents/HomeView";
import LoginView from "./CustomComponents/LoginView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import AboutView from "./CustomComponents/AboutView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";
import SignUpView from "./CustomComponents/SignUpView";
import NoviceView from "./CustomComponents/NoviceView";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      currentPAge: ""
    };
  }

  QSetView = (obj) => {
    this.setState({
      currentPAge: obj.page
    });
  };

  QGetView = (state) => {
    let page = state.currentPAge;
    switch (page) {
      case "about":
        return <AboutView />;
      case "novice":
        return <NoviceView />;
      case "addnew":
        return <AddNovicaView />;
      case "signup":
        return <SignUpView />;
      case "login":
        return <LoginView />;
      case "novica":
        return <SingleNovicaView />;
      default:
        return <HomeView />;
    }
  };

  render() {
    console.log(this.state.currentPAge);
    return (
      <div id="APP" className="container">
        <div id="menu" className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a
                onClick={() => this.QSetView({ page: "home" })}
                className="navbar-brand"
                href="#"
              >
                Home
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "about" })}
                      className="nav-link "
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "novice" })}
                      className="nav-link "
                      href="#"
                    >
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addnews" })}
                      className="nav-link"
                      href="#"
                    >
                      Add news
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "signup" })}
                      className="nav-link "
                      href="#"
                    >
                      Sign up
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "login" })}
                      className="nav-link "
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="viewer" className="row container"></div>
        {this.QGetView(this.state)}
      </div>
    );
  }
}

export default App;
