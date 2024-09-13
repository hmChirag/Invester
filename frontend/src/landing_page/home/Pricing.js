import React from 'react'

function PricingPage() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-4 mx-5 mt-5 pt-5'>
                    <h1>Unbeatable pricing</h1>
                    <p className='text-muted pt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See princing  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6  mt-5 pt-5'>
                    <div className='row text-center'>
                        <div className='col border py-4 mb-5'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border py-4 mb-5'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPage;