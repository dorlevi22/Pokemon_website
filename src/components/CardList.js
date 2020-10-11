import React from 'react';
import Card from './Card';

const pokemons_img = []
var i = 1;

while(i<=150){
	pokemons_img.push("https://pokeres.bastionbot.org/images/pokemon/" + i + ".png")
	i++;
}


const CardList=({pokemons, onCardClick}) => {
	return(
		<div>
			{
				pokemons.map((pokemon,i) => {
				return (
					<Card
						key={i}
						id={pokemons[i].id}
						image={pokemons_img[pokemons[i].id - 1]}
						name={pokemons[i].name}
						types={pokemons[i].types}
						onCardClick={onCardClick}
		    			/>
		    		);
  				})
			}
  		</div>
  	);
}

export default CardList;