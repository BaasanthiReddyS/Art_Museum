import React from 'react';

function DrLilaBanerjee() {
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row p-5' >
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Dr. Lila Banerjee</h5>
                    <p>Medium: Figurative / Mixed Media</p>
                    
                </div>
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Art historian and painter from Kolkata, now based in Bengaluru. Her work combines ink drawing and enamel painting to depict rituals of daily life and feminine resilience.</p>
                    <p>Represented at: BS Bengaluru</p>
                    <p>Artworks</p>
                    <p>“Tea Before Noon” (2025) — Layered domestic scene rendered in bold line and enamel.<br/>
                    “Grandmother’s Sari” (2021) — Portrait and textile fragments exploring generational identity.<br/>
                    “Lineage” (2018) — Continuous-line watercolor of three generations of women.</p>
                </div>
            </div>
        </div>
     );
}

export default DrLilaBanerjee;