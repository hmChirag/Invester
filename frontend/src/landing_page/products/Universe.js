import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-4">
        <h2 className="text-center mt-5 text-muted ">The Zerodha Universe</h2>
        <p className="mt-3 text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5">
          <img className="px-5" src="assets/smallcaseLogo.png" />
          <p className="text-muted text-small text-center">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            className="px-5"
            src="assets\streakLogo.png"
            alt="Streak Logo"
            title="Streak Logo"
            style={{ width: "300px", height: "150 px" }}
          />
          <p className="text-muted text-small text-center">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 mt-3 p-5">
          <img
            className="px-5"
            style={{ width: "300px", height: "250 px" }}
            src="assets\sensibullLogo.svg"
          />
          <p className="text-muted fs-7 text-small px-5 mt-2">
            Options trading platform{" "}
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            className="px-5"
            src="assets\zerodhaFundhouse.png"
            style={{ width: "300px", height: "150 px" }}
          />
          <p className="text-muted text-small text-center">Asset management </p>
        </div>
        <div className="col-4 p-5">
          <img className="px-5" src="assets\tijori.svg" />
          <p className="text-muted text-small text-center">
            Fundamental research platform
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            className="px-5"
            src="assets\dittoLogo.png"
            style={{ width: "250px", height: "150 px" }}
          />
          <p className="text-muted fs-7 text-small px-5">Insurance </p>
        </div>
        <button
          className="p-2 mt-2 mb-5 btn btn-primary text-white fs-5 "
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
