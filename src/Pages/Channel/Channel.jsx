import React from "react";
import "./Channel.scss"
import CoverChannel from "../../Assets/Images/Cover-channel.png"
import Cover from "../../Assets/Images/Cover.png"

import { useParams, NavLink } from "react-router-dom"

function Channel() {
    const { id } = useParams()
    const [ users, setUsers ] = React.useState([]);
    const [ cover, setCover ] = React.useState([]);
    const [ isLoading, setLoading ] = React.useState(true);
    const [ video, setVideo ] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://reqres.in/api/users/" + id)
        .then( response => response.json())
        .then( data => setUsers( data.data ));
        setLoading(false);
    }, [id]);

    React.useEffect(() => {
        fetch("https://reqres.in/api/users/")
        .then( response => response.json())
        .then( data => setCover( data.data ));
        setLoading(false);
    }, []);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos/")
			.then((response) => response.json())
			.then((data) => setVideo(data));
            
	}, [id]);
    
    if (isLoading) {
        return <h1>Loading ... </h1>;
    } else {
        return <div>
            <ul>
             <li key={users.id}>
                <img className="cover-img" src={Cover} alt="cover" width={1280} height={280}/>
                <div className="user-channel__head-wrapper">
                <div className="user-channel__inner-wrapper">
                    <img className="user-channel__avatar" src={users.avatar} alt="dollie" width={80} height={80}/>
                <div>
                    <h3 className="user-channel__heading">{users.first_name+ " " + users.last_name}</h3>
                    <p className="user-channel__text">245K subscribed</p>
                </div>
            </div>
            <button className="btn">Subscribe 2.3m</button>
            </div>
            <nav>
                <ul className="channel-list">
                    <li className="channel-list__item">
                        <a className="channel-list__link channel-list__link--active" href="#">Home</a>
                    </li>
                    <li className="channel-list__item">
                        <a className="channel-list__link" href="#">Videos</a>
                    </li>
                    <li className="channel-list__item">
                        <a className="channel-list__link" href="#">Playlists</a>
                    </li>
                    <li className="channel-list__item">
                        <a className="channel-list__link" href="#">Channels</a>
                    </li>
                    <li className="channel-list__item">
                        <a className="channel-list__link" href="#">Discussion</a>
                    </li>
                    <li className="channel-list__item">
                        <a className="channel-list__link" href="#">About</a>
                    </li>
                </ul>
            </nav>
            </li>
        </ul>
        <div className="channel-computer">
            <img className="channel-computer__img" src={CoverChannel} alt="cover" width={540} height={250}/>
            <div className="channel-computer__wrapper">
                <h3 className="channel-computer__heading">
                    Choosing The Best Audio Player Software For Your Computer
                </h3>
                <p className="channel-computer__text">
                Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                </p>
                <p className="channel-computer__info">
                    11k views  ·  6 months ago
                </p>
            </div>
            <div className="cover">
                <h4 className="cover__heading">
                    Recommended channel
                </h4>
                <ul className="cover-list">
                    {cover.length > 0 && cover.slice(0,3).map(item => (
                        <NavLink className="cover-list__link" to={"/channel/" + item.id}>
                            <li className="cover-list__item" key={item.id}>
                                <img className="cover-list__image" src={item.avatar} alt="avatar" width={50} height={50}/>
                                <h3 className="cover-list__heading">
                                    {item.first_name+ " " + item.last_name}
                                </h3>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
        <div className="food-drink">
                <h2 key={users.id} className="food-drink__heading">
                    {users.first_name+ " " + users.last_name + " " + "videos"}
                </h2>
            <ul className="food-drink__list">
                {video.length > 0 && video.slice(15, 20).map(img => (
                    <NavLink className="cover-list__link" to={"/videolink/" + img.id}>
                        <li key={img.id}>
                            <img className="image" src={img.url} alt="img" width={240} height={150} />
                            <h4 className="food-drink__lorem">Astronomy Or Astrology</h4>
                            <div className="food-drink__wrapper">
                                <p className="food-drink__text">240k views  ·  4 months ago</p>
                                <h4 className="food-drink__info">Food & Drink</h4>
                            </div>
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    </div>
        }
    }
    
    export default Channel;