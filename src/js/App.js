import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="app-wrapper">
        Hello World
        <style jsx global>
          {`
            body * {
              font-weight: 400;
            }
          `}
        </style>
        <style jsx>{`
          .app-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;
            line-height: 1.5;
            min-height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
