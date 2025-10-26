import React from 'react';

function ArtTypes() {
    return ( 
        <div style={{backgroundColor:"grey"}}>
        <div className="container" style={{alignContent:"center"}}>
            <h1 style={{textAlign:"center",fontSize: "36px",transition: "all 0.3s ease"}}>MasterPieces</h1>
            <div className="row" style={{gap:"20px", paddingBottom:"40px"}}>
                <div className="col-3" class="piece" style={{backgroundColor: 'grey'}}><img src="/images/art.jpeg" alt="" /></div>
                <div className='col-3' ><h2>Modern Art</h2></div>
                <div className="col-3" class="piece" style={{backgroundColor: 'grey'}}><img src="/images/art.jpeg" alt="" /></div>
                <div className='col-3' ><h2>Traditional Art</h2></div>
            </div>
        </div>    
        </div>
     );
}

export default ArtTypes;
