import React from 'react';

function MateoRSilva() {
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row p-5' >
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Mateo R. Silva</h5>
                    <p>Medium: Experimental Photography</p>
                    
                </div>
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Lisbon-born, Hyderabad-based photographer blending analogue negatives with digital overlays. His works explore movement, migration, and found narratives.</p>
                    <p>Represented at: BS Hyderabad</p>
                    <p>Artworks</p>
                    <p>“Transit 07” (2024) — A composite of city transport interiors reflecting human flow.<br/>
                    “Lost Luggage” (2022) — Triptych featuring abandoned suitcases transformed into memory objects.<br/>
                    “Static Cartography” (2020) — Collaged negatives forming imagined topographies.</p>
                </div>
            </div>
        </div>
     );
}

export default MateoRSilva;