const React = require('react');

//Inline CSS
const myStyle = {
    color: '#0000CD',
    backgroundColor: '#FFFF00',
    textAlign: 'center',
};

class Index extends React.Component{
    render(){
        const pokemons = this.props.pokemons
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
            </div>
        )
    }
}

module.exports = Index;