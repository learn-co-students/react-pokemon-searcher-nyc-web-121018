import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    frontSprite: true
  };

  findHP = () => {
    let stats = this.props.pokemon.stats;
    let hpObject = stats.filter(stat => {
      return stat.name === "hp";
    });

    return hpObject[0].value;
  };

  toggleImage = () => {
    this.setState({ frontSprite: !this.state.frontSprite });
  };

  render() {
    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img
              src={
                this.state.frontSprite
                  ? this.props.pokemon.sprites.front
                  : this.props.pokemon.sprites.back
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
