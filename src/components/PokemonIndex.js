import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokedata => {
        this.setState({ pokemon: pokedata });
      });
  }

  filterPokemon = event => {
    if (this.state.search === "") {
      return this.state.pokemon;
    } else {
      return this.state.pokemon.filter(pokemon => {
        return pokemon.name.includes(this.state.search.toLowerCase());
      });
    }
  };

  handleSearchChange = (e, { value }) => {
    this.setState({
      search: value
    });
  };

  createPokemon = pokemon => {
    this.setState({ pokemon: [...this.state.pokemon, pokemon] });
  };

  render() {
    console.log(this.state.pokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <h3>Search by name:</h3>
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
