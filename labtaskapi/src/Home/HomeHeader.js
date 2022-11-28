import React from 'react'
import { Link } from 'react-router-dom'
const HomeHeader = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active"><Link to="/" class="nav-link">Home</Link></li>
                    <li class="nav-item"><Link to="/About" class="nav-link">About Us</Link></li>
                    <li class="nav-item"><Link to="/Contact" class="nav-link">Contact Us</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default HomeHeader
