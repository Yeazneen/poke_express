const React = require('react');

//Inline CSS
const myStyle = {
    color: '#0000CD',
    backgroundColor: '#E6E6FA',
    textAlign: 'center',
};

const imgStyle = {
    justifyContent:'center',
    alignItems: 'center',
}

class Show extends React.Component{
    render(){
        const pokemon = this.props.pokemon
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                <div>
                <nav>
                    <a href="/pokemon">Back</a>
                </nav> 
                <h2>{pokemon.name}</h2>
                <image style={imgStyle} src={`${pokemon.img}.jpg`} alt={this.props.alt}></image>  
                </div>
            </div>
        )
    }
}
module.exports = Show;