import React from 'react'
function Hero() {
    return ( 
         <section className='container-fluid' id="supportHero">
            <div className='p-5 ' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href='' className='fs-5' style={{color:"white"}}>Track tickets</a>
            </div>
            <div className='row p-2'>
                <div className='col pb-5 px-5 fs-6'style={{margin:"0 70px"}}>
                    <h4 className='pb-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <input className='mb-2' placeholder='Eg. how do you activate F&Q,why is my order getting rejected '></input><br></br>
                    <div >

                    <a href='' className='p-2 fs-5' style={{color:"white"}}> Track account opening</a>
                    <a href='' className='p-2 fs-5' style={{color:"white"}}> Track segment activation</a>
                    <a href='' className='p-2 fs-5' style={{color:"white"}}> Intraday margins</a>
                    <a href='' className='p-2 fs-5' style={{color:"white"}}> Kite user manual</a>
                    </div>
                </div>
                <div className='col fs-6 pb-5 mb-5'>
                    <h4>Featured</h4>
                    <ol>
                        <li><a href=''className='p-2 fs-5' style={{color:"white"}}>Surveillance measure on scrips - August 2024</a></li>
                        <li><a href=''className='p-2 fs-5' style={{color:"white"}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
         </section>
     );
}

export default Hero;