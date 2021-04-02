import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';

import './index.css'
import Pokegame from './PokeGame';

class App extends Component {
    render() {
        return (
            <div>
                <Pokegame />
            </div>            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));