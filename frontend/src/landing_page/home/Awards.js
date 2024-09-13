import React from 'react'
function Awards() {
    return ( 
      <div className='contianer'>
        <div className='row m-5'>
          <div className='col-6 px-5 pt-5'>
              <img src='assets/largestBroker.svg'/>
          </div>
          <div className='col-6 pt-5'>
              <h1>Largest stock broker in India</h1>
              <p className='fs-5 my-4'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
              <div className='row'>
                <div className='col-6 fs-5 mt-3'>
                  <ul>
                    <li>
                      <p className='text-muted'>Futures and Options</p>
                    </li>
                    <li>
                      <p className='text-muted'>Commodity derivatives</p>
                    </li>
                    <li>
                      <p className='text-muted'>Currency derivatives</p>
                    </li>
                  </ul>  
                </div>  
                <div className='col-6 fs-5 mt-3'>
                  <ul>
                    <li>
                      <p className='text-muted'>Stocks & IPOs</p>
                    </li>
                    <li>
                      <p className='text-muted'>Direct mutual funds</p>
                    </li>
                    <li>
                      <p className='text-muted'>Bonds and Govt. Securities</p>
                    </li>
                  </ul>
                </div>  
                <img src='assets/pressLogos.png' className='mt-3'/>
              </div> 
          </div>
        </div>
      </div>
     );
}

export default Awards;