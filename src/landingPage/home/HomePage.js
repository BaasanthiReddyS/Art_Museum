import React from 'react';
import Hero from './Hero.js';
import ArtTypes from './ArtTypes.js';
import MasterPieces from './MasterPieces.js';
import NewArrival from './NewArrival.js';   

function HomePage() {
    return ( 
        <>
            <Hero />
            <MasterPieces />
            <NewArrival />
            <ArtTypes />

        </>
     );
}

export default HomePage;

