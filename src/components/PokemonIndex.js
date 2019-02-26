import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';

class PokemonPage extends React.Component {
  state = {
    search: '',
    pokemon: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemon => {
        this.setState({
          pokemon: pokemon
        });
      });
  }

  addPokemon = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    });
  };

  handleSearchChange = (e, { value }) => {
    this.setState(
      {
        search: value
      }
      // () => console.log(this.state)
    );
  };

  render() {
    console.log('index', this.state);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection
          search={this.state.search}
          pokemon={this.state.pokemon}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
