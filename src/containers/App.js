import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import Logo from '../components/Logo/Logo';
import InfoCard from '../components/InfoCard';


class App extends Component {
	constructor(){
		super();
	this.state={
		pokemons:[],
		searchfield: '',
		page: 'home',
		pokemon_to_show: 0,
		pokemons_img: []
	}
}

componentDidMount() {

	const pokemons_url = []
	const pokemons_obj = []
	const pokemons_img = []

	var i = 1;

	while(i<=150){
		pokemons_url.push("https://pokeapi.co/api/v2/pokemon/" + i + "/")
		pokemons_img.push("https://pokeres.bastionbot.org/images/pokemon/" + i + ".png")
		i++;
	}

	this.setState({pokemons_img: pokemons_img})

	Promise.all(pokemons_url.map(url => fetch(url).then(pokemon => pokemon.json())))
	.then(arr =>{ arr.map(pok => pokemons_obj.push(pok))})


	this.state.pokemons = pokemons_obj;
	
}

onSearchChange=(event)=>{
	this.setState({ searchfield:event.target.value})
	
}

onCardClick = (id) => {
	if (this.state.page === 'home') {
		this.setState({page:'card'})
		this.setState({pokemon_to_show: id})
	} else {
		this.setState({page:'home'})
		this.setState({pokemon_to_show: 0})
	}
}

	render(){
		const filteredPokemons =this.state.pokemons.filter(pokemon=>{
		return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		}
	)
	
		if (this.state.page ==='home'){
			return(
				<div className='tc'>
					<Logo />
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList pokemons={filteredPokemons} onCardClick={this.onCardClick}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		} else {
			return (
				<div className='tc' >
					<Logo/>
					<InfoCard 
					pokemon={this.state.pokemons[this.state.pokemon_to_show-1]} 
					onCardClick={this.onCardClick}
					image = {this.state.pokemons_img[this.state.pokemon_to_show-1]}
					/>
				</div>
			);
		}
	}
}
		

export default App;