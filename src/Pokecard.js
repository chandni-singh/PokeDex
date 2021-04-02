import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {

    render() {
        const {name, id, type, base_experience } = this.props;
        let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className = 'Pokecard'>
                <h3 className = 'Pokecard-title'>{name}</h3>
                <img src = {imgURL} />
                <div className = 'Pokecard-data'>Type:{type}</div>
                <div className = 'Pokecard-data'>EXP:{base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;