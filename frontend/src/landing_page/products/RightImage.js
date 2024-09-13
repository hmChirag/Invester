import React from "react";
function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="py-5 mt-4">{productName}</h1>
          <p>{productDescription}</p>

          <a className="mt-4 py-4" href={learnMore} style={{ textDecoration: "none" }}>
            {learnMore} <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}
export default RightImage;
