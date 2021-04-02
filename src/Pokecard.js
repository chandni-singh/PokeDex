import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {

    render() {
        const {name, id, type, base_experience } = this.props;
        let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className = 'Pokecard'>
                <h3>{name}</h3>
                <img src = {imgURL} />
                <div>Type:{type}</div>
                <div>EXP:{base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;