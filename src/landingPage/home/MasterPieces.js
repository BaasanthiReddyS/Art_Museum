import React from 'react';

function MasterPieces() {
    return ( 
        <div style={{backgroundColor:"grey"}}>
        <div className="container" style={{alignContent:"center"}}>
            <h1 style={{textAlign:"center",fontSize: "36px",marginBottom: "40px",marginTop: "40px",transition: "all 0.3s ease"}}>MasterPieces</h1>
            <div className="row" style={{gap:"35px", paddingBottom:"40px"}}>
                <div className="col-3" class="piece" style={{backgroundColor: '#fff'}}><img src="/images/art.jpeg" alt="" /></div>
                <div className="col-3" class="piece" style={{backgroundColor: '#fff'}}><img src="/images/art.jpeg" alt="" /></div>
                <div className="col-3" class="piece" style={{backgroundColor: '#fff'}}><img src="/images/art.jpeg" alt="" /></div>
                <div className="col-3" class="piece" style={{backgroundColor: '#fff'}}><img src="/images/art.jpeg" alt="" /></div>
            </div>
        </div>    
        </div>
     );
}

export default MasterPieces;