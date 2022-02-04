import React from "react";
import "./Main.scss"
import Hero from "./Hero/Hero";
import Recommend from "./Recommend/Recommend";
import Food from "./Food/Food";

function Main() {
    return <div className="wrap__main">
        <Hero />
        <Recommend />
        <Food/>
    </div>
}

export default Main;