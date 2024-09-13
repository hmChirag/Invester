import React from "react";
function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <h1 className="text-center mt-5 p-3">Technology</h1>
      <h4 className="text-muted text-center">
        Sleek, modern, and intuitive trading platforms
      </h4>
      <p className="text-center p-5">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
