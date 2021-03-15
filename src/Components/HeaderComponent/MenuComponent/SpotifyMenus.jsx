import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const SpotifyMenus = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to="/">premium</Link></li>
                    <li><Link to="/">Support</Link></li>
                    <li><Link to="/">Download</Link></li>
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/Signin">Login</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SpotifyMenus
