import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import spidey from './stuff/spidey.jpg';
import sg from './stuff/sg.jpg';
import steve from './stuff/steve.jpg';
import { genericTypeAnnotation } from '@babel/types';


function buttonStyle(props) {
    return (
    <div className="style">
        <button className={props.state.button ? "cliked": "notCliked"} onClick={props.handleClick}>Changer Style</button>  
    </div>
    )
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: [{
            nom: 'Rogers',
            prenom: 'Steve',
            ddn: '2 janvier 1987',
            pp: steve,
            background: "grey",
            post: "A la recherche de mon bouclier, contactez-moi si vous le trouvez."
          },
          {
            nom: 'Parker',
            prenom: 'Peter',
            ddn: '7 juillet 1965',
            pp: spidey,
            background: "grey",
            post: "Spider-verse 2 : coming soon"
          },
          {
            nom: 'Kara',
            prenom: 'Danvers',
            ddn: '12 septembre 1977',
            pp: sg,
            background: "grey",
            post: "Not related to Carol Danvers"
          }
        ],
        idUser: 0,
        button: true
    };
  }

  handleClick(i) {
    this.setState(
        {idUser: i,
        button: !this.state.button}
        );
  }

  render() {
    return (
      <div className="profile">
        <div className="change">
            <button onClick={() => this.handleClick(0)}>{this.state.profiles[0].prenom}</button>
            <button onClick={() => this.handleClick(1)}>{this.state.profiles[1].prenom}</button>
            <button onClick={() => this.handleClick(2)}>{this.state.profiles[2].prenom}</button>
        </div>
        <div className="infos">
            <img src={this.state.profiles[this.state.idUser].pp}></img>
            <article>
                <div className="prenom">
                    <p>{this.state.profiles[this.state.idUser].prenom}</p>
                </div>
                <div className="nom">
                    <p>{this.state.profiles[this.state.idUser].nom}</p>
                </div>
                <div className="ddn">
                    <p>{this.state.profiles[this.state.idUser].ddn}</p>
                </div>
            </article>
        </div>

        <div className="publi">
            <Publication
                publi={this.state.profiles[this.state.idUser].post}
            />
        </div>
        
      </div>
    );
  }
}

class Publication extends React.Component{
    render() {
        return(
            <div>
                <article>
                    <p>{this.props.post}</p>
                </article>
            </div>
        );
    }
}


ReactDOM.render(
    <Profile/>,
    document.getElementById('root')
  );
