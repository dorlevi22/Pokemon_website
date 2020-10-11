import React from 'react';
import './InfoCard.css';

const InfoCard = (props) => {
	const {pokemon, onCardClick, image} = props;
    
    const str_types = pokemon.types.map(types => types.type.name.capitalize());
	const str_abilities = pokemon.abilities.map(abilities => abilities.ability.name.capitalize());

	return (
		<div className = 'InfoCard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-40' onClick={() => onCardClick()}>
			<div>
				<h2 className='f1'>{pokemon.name.capitalize()}</h2>
				<img src={image} alt='picture' height='200' width='200'/>
				<p>#Pokedex: {pokemon.id}</p>
				<p>Types: {str_types.join(", ")}</p>
				<p>Height: {pokemon.height}</p>
				<p>Weight: {pokemon.weight}</p>
				<p>Abilities: {str_abilities.join(", ")}</p>
				<p>Base experience: {pokemon.base_experience}</p>
				<p className="b underline">Stats:</p>
				<p>HP: {pokemon.stats[0].base_stat}</p>
				<p>ATTACK: {pokemon.stats[1].base_stat}</p>
				<p>DEFENCE: {pokemon.stats[2].base_stat}</p>
				<p>SPECIAL-ATTACK: {pokemon.stats[3].base_stat}</p>
				<p>SPECIAL-DEFENCE: {pokemon.stats[4].base_stat}</p>
				<p>SPEED: {pokemon.stats[5].base_stat}</p>
			</div>
		</div>
	);
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

export default InfoCard;

