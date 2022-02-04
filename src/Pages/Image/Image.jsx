import React from "react";
import "./Image.scss"

import Like from "../../Assets/Images/Combined-Shape20.svg"
import DisLike from "../../Assets/Images/Combined-Shape21.svg"
import Share from "../../Assets/Images/Fill22.svg"
import Oval from "../../Assets/Images/Oval.png"

import { useParams, NavLink } from "react-router-dom"

function Image() {
    const [ user, setUsers ] = React.useState([]);
	const [ image, setImages ] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos/" + id)
            .then( response => response.json())
            .then( data => setUsers( data ));
	}, [id]);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos/")
            .then( response => response.json())
            .then( data => setImages( data ));
	}, [id]);

		return <div className="wrapper__images">
				<div className='images-wrapper'>
					<img className="image" src={user.url} width={900} height={500} alt={user.first_name + "'s url"} />
					<p className="images-wrapper__heading">Dude You Re Getting A Telescope</p>
					<div className="images-wrapper__outwrap">
						<p className="images-wrapper__text">123k views</p>
						<ul className="images-wrapper__list">
							<li className="images-wrapper__item">
								<img className="images-wrapper__img" src={Like} alt="like" width={14} height={13}/>
								<p className="images-wrapper__info">123k</p>
							</li>
							<li className="images-wrapper__item">
								<img className="images-wrapper__img" src={DisLike} alt="like" width={14} height={13}/>
								<p className="images-wrapper__info">435k</p>
							</li>
							<li className="images-wrapper__item">
								<img className="images-wrapper__img" src={Share} alt="like" width={14} height={13}/>
								<p className="images-wrapper__info">Share</p>
							</li>
						</ul>
					</div>
					<div className="drink">
						<img className="drink__img" src={Oval} alt="oval" width={80} height={80}/>
						<div className="drink__wrapper">
							<h4 className="drink__heading">
								Food & Drink
							</h4>
							<p className="drink__text">
								Published on 14 Jun 2019
							</p>
							<p className="drink__info">
								A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
							</p>
							<button className="drink__btn">Show more</button>
							<button className="drink__subs-btn">Subscribe 2.3m</button>
						</div>
					</div>
				</div>

				<div className="next">
					<h2 className="next__heading">Next</h2>
					<ul className="next-list">
						{image.length > 0 && image.slice(20, 24).map(item => (
							<NavLink className="next__link" to={"/videolink/" + item.id}>
								<li className="next-list__item" key={item.id}>
								    <img className="next__image" src={item.url} alt="img" width={240} height={150}/>
								    <p className="next-list__text">A Good Autoresponder</p>
								<div className="next-wrapper">
								    <p className="next-wrapper__text">123k views</p>
								    <h4 className="next-wrapper__heading">Dollie Blair</h4>
								</div>
								</li>
							</NavLink>
						))}
					</ul>
				</div>
	</div>
}

export default Image