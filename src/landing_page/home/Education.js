import React from 'react'
function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6  mt-5'>
                    <div >
                        <img src='assets/education.svg'></img>
                    </div>
                </div>
                <div className='col-4 mt-5 pt-5'>
                    <h3>Free and open market education</h3>
                    <p className='text-muted pt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity   <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='text-muted pt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A   <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                
            </div>
        </div>
    );
}

export default Education;