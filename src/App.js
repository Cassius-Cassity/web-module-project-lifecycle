import React from 'react';
import axios from 'axios';
class App extends React.Component {

state = {
  avatar: "",
  name: '',
  followers: '',
}

componentDidMount(){
  axios.get('https://api.github.com/users/Cassius-Cassity')
  .then(resp => {
    this.setState({
      ...this.state,
      avatar: resp.data.avatar_url,
      name: resp.data.name,
      followers: resp.data.followers
    })
  })
}
  render() {
    return(<div>
      <h1>Github Card</h1>
      <h3>Name: {this.state.name}</h3>
      <img src={this.state.avatar}/>
      <p>followers: {this.state.followers}</p>
    </div>);
  }
}

export default App;
