import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    sprite: this.props.sprites.front
  };

  toggleSprite = () => {
    this.setState({
      sprite:
        this.state.sprite === this.props.sprites.front
          ? this.props.sprites.back
          : this.props.sprites.front
    });
  };
  render() {
    return (
      <Card>
        <div>
          <div className='image'>
            <img
              src={this.state.sprite}
              alt='oh no!'
              onClick={this.toggleSprite}
            />
          </div>
          <div className='content'>
            <div className='header'>{this.props.name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
