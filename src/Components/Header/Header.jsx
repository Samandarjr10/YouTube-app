import React from "react";

import "./Header.scss"
import MenuBurger from "../../Assets/Images/burger-menu.svg"
import YouTubeLogo from "../../Assets/Images/Shape1.svg"
import YouTubeHead from "../../Assets/Images/Group.svg"
import Video from "../../Assets/Images/Shape2.svg"
import Nuqta from "../../Assets/Images/Shape3.png"
import Budilnik from "../../Assets/Images/Shape4.svg"
import User from "../../Assets/Images/Userpic-1.png"

function Header() {
    return <header className="header">
        <div className="container header-container">
            <img className="burger" src={MenuBurger} alt="menu-burger" width={20} height={17}/>
            <div className="youtube__flex">
                <img src={YouTubeLogo} alt="youtube-logo" width={37} height={25}/>
                <img src={YouTubeHead} alt="head" width={75} height={23} />
            </div>
            <input className="search__input" type="text" placeholder="Search" />
            <img className="video" src={Video} alt="video" width={27} height={20}/>
            <img className="nuqta" src={Nuqta} alt="nuqtalar" width={21} height={21}/>
            <img className="budilnik" src={Budilnik} alt="budilnik" width={22} height={26}/>
            <img className="userpic" src={User} alt="user" width={40} height={40}/>
        </div>
    </header>
}

export default Header;