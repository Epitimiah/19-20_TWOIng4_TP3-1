import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import lion from './stuff/lion.jpg';
import sg from './stuff/sg.jpg';
import steve from './stuff/steve.jpg';

function buttonStyle(){

}


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: [{
            nom: 'Rogers',
            prenom: 'Steve',
            ddn: '2 janvier 1987',
            pp: steve
          },
          {
            nom: 'Parker',
            prenom: 'Billy',
            ddn: '7 juillet 1965',
            pp: lion
          },
          {
            nom: 'Kara',
            prenom: 'Danvers',
            ddn: '12 septembre 1977',
            pp: sg
          }
        ],
        idUser: 0,
    };
  }

  handleClick(i) {
    this.setState({idUser : i})
  }

  render() {
    return (
      <div className="profile">
        <div className="infos">
            <img src={this.state.profiles[this.state.idUser].pp}></img>
            <article>
                <div className="first_name">
                    <p style={{color : this.state.color}}>{this.state.profiles[this.state.idUser].prenom}</p>
                </div>
                <div className="last_name">
                    <p style={{color : this.state.color}}>{this.state.profiles[this.state.idUser].nom}</p>
                </div>
                <div className="date">
                    <p style={{color : this.state.color}}>{this.state.profiles[this.state.idUser].ddn}</p>
                </div>
            </article>

            <button>Changer Style</button>

        </div>

    
      </div>
    );
  }
}

ReactDOM.render(
    <Profile/>,
    document.getElementById('root')
  );