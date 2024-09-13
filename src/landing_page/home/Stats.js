import React from 'react' 
function Stats() {
    return ( 
        <div className='container '>
            <div className='row my-5'>
                <div className='col-6 my-5 pt-5'>
                    <h1 className='py-5'>Trust with confidence</h1>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h4 className='pt-2'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4 className='pt-2'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className='pt-2'>Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 my-5 pt-5'>
                        <img src='assets/ecosystem.png' style={{width:"90%"}}/>
                        <div className='text-center'>
                            <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                            <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                </div>
            </div>
            
        </div>
     );
}

export default Stats;