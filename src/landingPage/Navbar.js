import React from 'react';

function Navbar() {
    return ( 

        <nav class="navbar navbar-dark p-3"style={{backgroundColor:'grey'}}>
            <div class="container-fluid" style={{backgroundColor:'white',borderRadius: '12px', color:'black'}}>
            <a class="navbar-brand" href="#">
                <img src="/images/logo.png" width="35" height="40" alt="" />
            </a>
                <div className="d-flex gap-5">
                    <a className="nav-item nav-link active px-2" href="#">Home</a>
                    <a className="nav-item nav-link px-2" href="#">Gallery</a>
                    <a className="nav-item nav-link px-2" href="#">Artists</a>
                    <a className="nav-item nav-link px-2" href="#">Events</a>
                    <a className="nav-item nav-link px-2" href="#"><i className="fa-solid fa-circle-user"></i></a>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;