import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className=" pt-5">People</h1>
        <div className="col-5">
            <img src="assets/nithinKamath.jpg" style={{borderRadius:"100%",width:"55%", padding:"10px",margin:"50px",marginLeft:"190px"}}></img>
            <h4 style={{marginLeft:"150px",marginTop:"-40px"}}>Nithin Kamath</h4>
            <p style={{marginLeft:"140px"}}>Founder, CEO</p>
        </div>
        <div className="col-7 p-5 my-5 text-muted" >
          <p
            
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
              Playing basketball is his zen.        
            </p>
            <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href=""  style={{textDecoration:"none"}}>TradingQnA</a> /
              <a href=""  style={{textDecoration:"none"}}>Twitter</a>
            </p> 
        </div>
      </div>
    </div>
  );
}

export default Team;
