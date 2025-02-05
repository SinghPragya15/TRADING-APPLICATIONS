import React from 'react'

function Stats() {
    return (
       <div className='container mb-5'>
        <div className='row'>
          <div className='col-6' >
            <h1 style={{marginBottom:"7%"}}>Trust with Confidence</h1>
            <h2>Customer-first always</h2>
            <p className='text-muted' >That's why 1/3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments</p>
            <h2>No spam or gimmicks</h2>
            <p className='text-muted'>No gimmicks,spam,"gamification", or annooying push notifications.High quality apps that you use at your pace,the way you like.</p>
            <h2>The Zerodha universe</h2>
            <p className='text-muted'>Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
            <h2>Do better with money</h2>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch,we don't just facilitate transcations,but actively help you do better with your money</p>
          </div>
          <div className='col-6'>
            <img src='media/ecosystem.png' style={{width:"90%"}}/>
            <div className='text-center'>
              <a href='' className='mx-5 ' style={{textDecoration:'none'}}>Explore our products<i className='fa fa-long-arrow-right'></i></a>
              <a href='' style={{textDecoration:'none'}}>Try kite demo<i className='fa fa-long-arrow-right'></i></a>
            </div>
          </div>
        </div>
       </div>
      );
}

export default Stats;