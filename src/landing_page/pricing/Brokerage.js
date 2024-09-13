import React from "react";
function Brokerage() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-8 text-muted">
          <h3 className="fs-4 text-center pb-4">
            <a href="" style={{ textDecoration: "none" }}>
              Brokerage calculator
            </a>
          </h3>
            <ul>
                <li><p className="fs-6">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</p></li>
                <li><p className="fs-6">Digital contract notes will be sent via e-mail.</p></li>
                <li><p className="fs-6">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p></li>
                <li><p className="fs-6">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p></li>
                <li><p className="fs-6">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</p></li>
                <li><p className="fs-6">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p></li>
            </ul>
        </div>
        <div className="col-4 text-muted ">
          <h3 className="fs-4">
            <a href="" style={{ textDecoration: "none" }}>
              List of charges
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
