import React from "react";
import "./Recommend.scss"

import { NavLink } from "react-router-dom"

function Recommend() {
    const [ users, setUsers ] = React.useState([]);

    React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
            .then( response => response.json())
            .then( json => setUsers( json ));
	}, []);
    
    return <div>
        <h2 className="recommend__heading">Recommended</h2>
        <ul className="recommend-photos-list">
            { users.length > 0 && users.slice(5, 8).map(user => (
                <NavLink className="recommend-photos-list__item" to={"/videolink/" + user.id}>
                    <li key={user.id}>
                        <img className="image" src={user.url} alt="img" width={400} height={250} />
                        <h4 className="recommend__lorem">Dude You Re Getting A Telescope</h4>
                        <div className="recommend__wrapper">
                            <p className="recommend__text">34k views  ·  5 months ago</p>
                            <h4 className="recommend__info">Gussie French</h4>
                        </div>
                    </li>
                </NavLink>
            ))}
        </ul>
    </div>
}

export default Recommend;