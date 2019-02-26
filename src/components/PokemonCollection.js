import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
  renderAllPokemon = () => {
    let render = this.props.pokemon.map(p => {
      return (
        <PokemonCard
          key={p.id}
          name={p.name}
          sprites={p.sprites}
          hp={p.stats.find(stat => stat.name === 'hp').value}
        />
      );
    });

    if (this.props.search !== '') {
      return this.props.pokemon
        .filter(p =>
          p.name.toLowerCase().includes(this.props.search.toLowerCase())
        )
        .map(p => {
          return (
            <PokemonCard
              key={p.id}
              name={p.name}
              sprites={p.sprites}
              hp={p.stats.find(stat => stat.name === 'hp').value}
            />
          );
        });
    } else {
      return render;
    }
  };

  renderSearchedPokemon = () => {};
  render() {
    return <Card.Group itemsPerRow={6}>{this.renderAllPokemon()}</Card.Group>;
  }
}

export default PokemonCollection;
