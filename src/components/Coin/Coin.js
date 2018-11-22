import React from 'react';
import Gcoin from './Gold_coin.png';
import Scoin from './Silver_coin.png';
import Ccoin from './Copper_coin.png';


function coin(props) {
	let money = parseInt(props.val);
	let g = Math.floor(money / 10000);
	let s = Math.floor((money - g * 10000) / 100);
	let c = money - g * 10000 - s * 100;

	return (
		<span>
			{Boolean(g) && <span>{g} <img src={Gcoin}/> </span>}
			{Boolean(s) && <span>{s} <img src={Scoin}/> </span>}
			{Boolean(c) && <span>{c} <img src={Ccoin}/> </span>}
		</span>
	)
};

export default coin;