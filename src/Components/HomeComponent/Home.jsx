import React from 'react'
import Fotter from '../FotterComponent/Fotter';
import SpotifySlider from '../SliderComponent/SpotifySlider'
import "./Home.css";
const Home = () => {
    return (
        <div>
            <SpotifySlider />
            <Fotter/>
        </div>
    )
}

export default Home
