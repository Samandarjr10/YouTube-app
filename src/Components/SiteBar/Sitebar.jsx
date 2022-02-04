import React from "react";
import "./Sitebar.scss";

import { NavLink } from "react-router-dom";

import Home from "../../Assets/Images/ui.svg"
import Trending from "../../Assets/Images/ui-5.svg"
import Subcribe from "../../Assets/Images/ui-4.svg"
import Library from "../../Assets/Images/ui-7.svg"
import History from "../../Assets/Images/ui-6.svg"
import Watchlater from "../../Assets/Images/tech-2.svg"
import Favourites from "../../Assets/Images/ui-2.svg"
import Likedvideos from "../../Assets/Images/ui-3.svg"
import Music from "../../Assets/Images/ui-1.svg"
import Games from "../../Assets/Images/tech-1.svg"
import ShowMore from "../../Assets/Images/vector.svg"
import Setting from "../../Assets/Images/ui-8.svg"

function SiteBar() {
    const [ users, setUsers ] = React.useState({});


    React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch('https://reqres.in/api/users');
				const data = await response.json();

				if (data?.data?.length > 0) {
					setUsers([...data.data]);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

    return <div className="sitebar-container">
        <nav>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Home} alt="home" width={20} height={19}/>
                    <a className="nav-list__head nav-list__head--active">Home</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Trending} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Trending</a>
                </li>
                <li className="nav-list__item nav-list__item--active">
                    <img className="nav-list__img" src={Subcribe} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Subscriptions</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Library} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Library</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={History} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">History</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Watchlater} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Watch later</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Favourites} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Favourites</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Likedvideos} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Liked videos</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Music} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Music</a>
                </li>
                <li className="nav-list__item">
                    <img className="nav-list__img" src={Games} alt="home" width={20} height={19}/>
                    <a className="nav-list__head">Games</a>
                </li>
                <li className="nav-list__item nav-list__item--active">
                    <img className="nav-list__img" src={ShowMore} alt="home" width={14} height={8}/>
                    <a className="nav-list__head">Show more</a>
                </li>
            </ul>
        </nav>
        <div>
            <h2 className="Subscriptions">Subscriptions</h2>
            <ul className="user-list">
                {users.length > 0 && users.map(user => (
                    <NavLink className="user__top" to={'/channel/' + user.id}>
                        <li key={user.id} className="user-list__item">
                            <img className="user-list__img" src={user.avatar} width='28' height='28' alt={user.last_name + "'s avatar"}/>
                            <div className="user-name__heading">
                                <h3 className="user__heading">
                                    {user.first_name + " " + user.last_name}
                                </h3>
                            </div>
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className="settings-wrap">
                <img className="nav-list__img" src={Setting} alt="settings" width={19} height={20}/>
                <p className="nav-list__head">Setting</p>
            </div>
        </div>
    </div>
}

export default SiteBar