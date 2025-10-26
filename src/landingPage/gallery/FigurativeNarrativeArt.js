import React from 'react';

function FigurativeNarrativeArt() {
    return (
        <div className='container p-5 text-muted'>
            <h2 className='text-center pb-3'>FigurativeNarrativeArt</h2>
            <div className='row p-5' >
                <div className='col-4 text-center'>
                    <img src='/images/art.jpeg' style={{width:"90%",height:'50vh', border: "8px solid grey",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Art</h5>
                    <p>Artist</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='#' style={{width:"90%",height:'50vh', border: "8px solid grey",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Art</h5>
                    <p>Artist</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='#' style={{width:"90%",height:'50vh', border: "8px solid grey",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Art</h5>
                    <p>Artist</p>
                </div>
                
            </div>
        </div>
      );
}

export default FigurativeNarrativeArt;