import React from 'react';

function AmalaSuresh() {
    return ( 
         <div className='container p-5 text-muted'>
            <h1 className='text-center pb-3'>People</h1>
            <div className='row p-5' >
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Amala Suresh</h5>
                    <p>Medium: Mixed Media / Abstract</p>
                    
                </div>
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Bengaluru-based artist whose works explore rain, texture, and memory through layered canvases. Amala often incorporates natural pigments, wax, and charcoal to recreate the sensory rhythm of monsoon.</p>
                    <p>Represented at: BS Bengaluru</p>
                    <p>Artworks</p>
                    <p>“Monsoon Ledger” (2023) — Mixed media on canvas. Layers of pigment and wax symbolizing city rainfall.<br/>
                    “Folded Maps” (2021) — Graphite and wax panels evoking forgotten streets and memory traces.<br/>
                    “After the Lantern” (2019) — Oil on linen; a poetic dialogue between light and shadow</p>
                </div>
            </div>
        </div>
     );
}

export default AmalaSuresh;