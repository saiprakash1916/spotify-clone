import React, { Fragment } from 'react';
import SpotifyLogo from '../HeaderComponent/LogoComponent/SpotifyLogo';
import "./Fotter.css"
const Fotter = () => {
    return (
        <Fragment>
            <section className="fotter">
                <article>
                    <div className="fotterblock">
                        <div className="fotterBlockimages"><a href="/"><SpotifyLogo/></a></div>
                        <div className="fotterBlockContent">
                                <div className="fotterblockCompany">
                                <p>Company</p>
                                <ul>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Jobs</a></li>
                                    <li><a href="/">For the Rcord</a></li>
                                    
                                </ul>
                            </div>
                            <div className="fotterblockCommunities">
                                <p>COMMUNITIES</p>
                                <ul>
                                    <li><a href="/">For Artists</a></li>
                                    <li><a href="/">Developers</a></li>
                                    <li><a href="/">Advertising</a></li>
                                    <li><a href="/">Investors</a></li>
                                    <li><a href="/">Vendors</a></li>
                                </ul>
                            </div>
                            <div className="fotterblockLinks">
                                <p>USEFUL LINKS</p>
                                <ul>
                                    <li><a href="/">Support</a></li>
                                    <li><a href="/">Web Player</a></li>
                                    <li><a href="/">Free Mobile App</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="fotterblockIcons">
                            <ul>
                                <li><a href="https://www.instagram.com/spotify/"><span><i className="fab fa-instagram fa-3x"></i></span></a></li>
                                <li><a href="https://twitter.com/spotify"><span><i className="fab fa-twitter-square fa-3x"></i></span></a></li>
                                <li><a href="https://www.facebook.com/Spotify"><span><i className="fab fa-facebook fa-3x"></i></span></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default Fotter
