import React from 'react';

function NishaKapoor() {
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row p-5' >
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Bio: Textile artist from Jaipur working at BS Hyderabad’s Craft Residency. She reconstructs folk embroidery and dye techniques into modern art forms.</p>
                    <p>Represented at: BS Hyderabad</p>
                    <p>Artworks</p>
                    <p>“Chromatic Ledger” (2023) — Patchwork of dyed fabric pieces symbolizing memory grids.<br/>   
                    “Market Hymn” (2021) — Embroidered depiction of Indian bazaars and textures.<br/>
                    “Threaded Cartouche” (2018) — Circular textile collage inspired by vernacular signage.</p>
                </div>
                <div className='col-5 text-center'>
                    <img src='#' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Nisha Kapoor</h5>
                    <p>Medium: Textile / Craft Contemporary</p>
                    
                </div>
            </div>
        </div>
     );
}

export default NishaKapoor;