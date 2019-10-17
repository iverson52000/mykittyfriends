import React from 'react';

const Card = (props) => {
	const {id, name, email} = props;
	return(
	  <div className = 'tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
	  	<img alt = 'robots' src = {`https://robohash.org/${id+500}?set=set4`} width="200" height="200"/>
	  	<div>
	  	  <h2>{name}</h2>
	  	  <p>{email}</p>
	  	</div>
	  </div>
	);
}

export default Card;