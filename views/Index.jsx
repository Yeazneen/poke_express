const React = require('react');

//Inline CSS
const myStyle = {
    color: '#0000CD',
    backgroundColor: '#E6E6FA',
    textAlign: 'center',
};

class Index extends React.Component{
    render(){
        const pokemons = this.props.pokemons
        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <ul>
                {
                    pokemons.map((pokemon, i) => {
                        return (
                            <li><a href ={`/pokemon/${i}`}>{pokemon.name}</a></li>
                        )
                        
                    })
                }
                </ul>
            </div>
        )
    }
}

module.exports = Index;