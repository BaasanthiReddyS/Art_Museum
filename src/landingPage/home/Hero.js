import React from 'react';

function Hero() {
    return ( 
        <div style={{
                backgroundImage: "url('/images/Museum.jpeg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'brown',
                position: 'relative' // required so the absolute button is positioned relative to this container
            }}>
            
            <button
                style={{
                    position: 'absolute',
                    bottom: '6%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '22px',
                    border: 'none',
                    backgroundColor: 'black',
                    color: '#fff',
                    fontSize: '1.00rem',
                    cursor: 'pointer',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)', // deep shadow
                    transition: 'transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms ease, background-color 160ms ease',
                    zIndex: 2
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1.06)';
                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.65)';
                    e.currentTarget.style.backgroundColor = 'grey';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
                    e.currentTarget.style.backgroundColor = 'black';
                }}
                onFocus={e => { // keyboard accessibility
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1.04)';
                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.65)';
                }}
                onBlur={e => {
                    e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
                }}
                aria-label="Explore Events"
            >
                Explore Events
            </button>

        </div>
     );
}

export default Hero;