import React from 'react';

function IbrahimAlKarim() {
    return ( 
        <div className='container p-5 text-muted'>
            
            <div className='row p-5' >
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Dubai-born sculptor based in Hyderabad. His geometric works use steel, light, and shadow to explore balance, void, and architectural rhythm.</p>
                    <p>Represented at: BS Hyderabad</p>
                    <p>Artworks</p>
                    <p>“Vector Halo” (2024) — Stainless steel and LEDs forming an illusion of a floating ring.<br/>
                    “Tide Lines” (2020) — Outdoor Cor-ten steel installation tracing sea levels.<br/>
                    “Negative Fold” (2019) — Abstract study in aluminum about absence and form.</p>
                </div>
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Ibrahim Al-Karim</h5>
                    <p>Medium: Sculpture / InstallationO</p>
                    
                </div>
            </div>
        </div>
     );
}

export default IbrahimAlKarim;