import React, { Component, Fragment } from 'react';
import "./Fotter.css"
const Fotter = () => {
    return (
        <Fragment>
            <section>
                <article>
                    <div>
                        <div className="fotterBlockimages"></div>
                        <div>
                            <p>Company</p>
                            <ul>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Jobs</a></li>
                                <li><a href="/">For the Rcord</a></li>
                                
                            </ul>
                        </div>
                        <div>
                            <p>COMMUNITIES</p>
                            <ul>
                                <li><a href="/">For Artists</a></li>
                                <li><a href="/">Developers</a></li>
                                <li><a href="/">Advertising</a></li>
                                <li><a href="/">Investors</a></li>
                                <li><a href="/">Vendors</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>USEFUL LINKS</p>
                            <ul>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Web Player</a></li>
                                <li><a href="/">Free Mobile App</a></li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default Fotter
