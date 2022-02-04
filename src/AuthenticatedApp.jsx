import React from "react";

import Header from "./Components/Header/Header";
import SiteBar from "./Components/SiteBar/Sitebar";
import Main from "./Components/Main/Main";
import Image from "./Pages/Image/Image";
import Channel from "./Pages/Channel/Channel";

import { Routes, Route } from "react-router-dom"

function Authenticated() {
    return <div className="wrapper">
        <Header/>
        <div className="container main-wrapper"> 
        <SiteBar/>
            <Routes> 
                <Route path="/channel/:id" element={<Channel />}/>
            </Routes>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="/videolink/:id" element={<Image />}/>
            </Routes>
        </div>
    </div>
}

export default Authenticated