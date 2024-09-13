import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='assets/homeHero.png' alt='hero image' className='mx-5' style={{width:"85%",padding:"0 60px"}} />
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-4 my-2 text-muted'>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className='p-2 mt-2 btn btn-primary text-white fs-5 ' style={{width:"20%",margin:"0 auto"}}>Sign up now</button> 
            </div>
        </div>
     );
}

export default Hero;