import React from "react";
import "./Hero.scss"
import Dollie from "../../../Assets/Images/Ovaldollie.png"

import { NavLink } from "react-router-dom"

function Hero() {
    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
            .then( response => response.json())
            .then( json => setUsers( json ));
	}, []);
    
    return <div>
            <NavLink className="dollie__wrapper-head" to={"channel/"}>
                <img className="dollie__img" src={Dollie} alt="dollie" width={50} height={50}/>
                <h2 className="dollie__heading">Dollie Blair</h2>
            </NavLink>
        <ul className="user-photos-list">
            { users.length > 0 && users.slice(0, 5).map(user => (
                <NavLink className="user-photos-list__item" to={"videolink/" + user.id}>
                    <li key={user.id}>
                        <img className="image__user" src={user.url} alt="img" width={220} height={150} />
                        <p className="user-photos-list__text">Lorem ipsum dolor sit amet.</p>
                        <div className="star-wrapper">
                            <p className="star-wrapper__text">80k views  ·  3 days ago</p>
                            <h4 className="star-wrapper__heading">Dollie Blair</h4>
                        </div>
                    </li>
                </NavLink>
            ))}
        </ul>
    </div>
}

export default Hero;