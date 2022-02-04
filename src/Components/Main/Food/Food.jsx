import React from "react";
import { NavLink } from "react-router-dom";
import Oval from "../../../Assets/Images/Oval.png"
import "./Food.scss"

function Food() {
    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
            .then( response => response.json())
            .then( json => setUsers( json ));
	}, []);

    return <div>
            <NavLink className="food__wrapper-head" to={"/channel/"}>
                <img className="oval__img" src={Oval} alt="oval" width={50} height={50} />
                <h2 className="food__heading">Food & Drink</h2>
                <p className="food__head-text">Recommended channel for you</p>
                <button className="btn">Subscribe 2.3m</button>
            </NavLink>

        <ul className="food-photos-list">
            { users.length > 0 && users.slice(8, 13).map(user => (
                <NavLink className="food-photos-list__item" to={"/videolink/" + user.id}>
                    <li key={user.id}>
                        <img className="image" src={user.url} alt="img" width={240} height={150} />
                        <h4 className="food__lorem">Lorem ipsum dolor sit amet.</h4>
                        <div className="food__wrapper">
                            <p className="food__text">80k views  ·  3 days ago</p>
                            <h4 className="food__info">Food & Drink</h4>
                        </div>
                    </li>
                </NavLink>
            ))}
        </ul>
    </div>
}

export default Food;