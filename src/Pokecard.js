import React, {Component} from 'react';
import './Pokecard.css';

const Poke_BaseURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {

    render() {
        const {name, id, type, base_experience } = this.props;

        return (
            <div className = 'Pokecard'>
                <h3 className = 'Pokecard-title'>{name}</h3>
                <div className = "Pokecard-image">
                    <img src = {`${Poke_BaseURL}${padToThree(id)}.png`} />
                </div>
                <div className = 'Pokecard-data'>Type:{type}</div>
                <div className = 'Pokecard-data'>EXP:{base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;