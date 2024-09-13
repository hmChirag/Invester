import React from "react";
function Hero() {
  return (
    <div className="container pt-5 ">
      <div className="row text-center pb-5 border-bottom">
        <h1 className="mt-5">Pricing</h1>
        <p className="fs-4 pb-5 my-2">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row pb-4 mt-4 text-center border-bottom">
        <div className="col-4 p-5">
          <img src="assets\pricingEquity.svg"></img>
          <h1>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
            <img src="assets\intradayTrades.svg"></img>
          <h1>Intraday and F&O trades</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
            <img src="assets\pricingMF.svg"></img>
          <h1>Free direct MF</h1>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
