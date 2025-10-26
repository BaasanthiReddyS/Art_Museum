import React from 'react';

function ArjunMehta() {
    return ( 
        <div className='container p-5 text-muted'>
            
            <div className='row p-5' >
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Technologist-turned-artist exploring nature and computation. His works generate visual ecosystems through live code.</p>
                    <p>Represented at: BS Bengaluru</p>
                    <p>Artworks</p>
                    <p>“Breath of the Algorithm” (2025) — Interactive projection responding to real-time sound.<br/>
                    “Seed Patterns” (2022) — Print series based on generative growth algorithms.<br/>
                    “Looped River” (2020) — Interactive web art where user movement alters digital water flow.</p>
                </div>
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Arjun Mehta</h5>
                    <p>Medium: Digital / Generative Art</p>
                    
                </div>
            </div>
        </div>
     );
}

export default ArjunMehta;