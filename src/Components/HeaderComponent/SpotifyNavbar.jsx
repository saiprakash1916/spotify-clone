import React, { Fragment } from 'react'
import SpotifyLogo from './LogoComponent/SpotifyLogo'
import SpotifyMenus from './MenuComponent/SpotifyMenus';
import { Link } from "react-router-dom";
import "./Spotify-navbar.css"
const SpotifyNavbar = () => {
    return (
        <Fragment>
            <section id="spotifyNavbarBlock">
                <article>
                    <div className="logoBlock"><Link to="/"><SpotifyLogo /></Link></div>
                    <div className="menuBlock"><SpotifyMenus /></div>
                </article>
            </section>
        </Fragment>
    )
}

export default SpotifyNavbar
