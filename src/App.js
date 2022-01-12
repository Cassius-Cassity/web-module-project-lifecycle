import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios'

class App extends React.Component {
  state = {
    currentUser: "Cassius-Cassity",
    user:{},
    followers: []
  }

componentDidMount(){
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(resp => {
    this.setState({
      ...this.state,
      user: resp.data
    });
  })
}

componentDidUpdate (prevProps, prevState){
  if(this.state.user !== prevState.user){
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(resp => {
    this.setState({
      ...this.state,
      followers: resp.data
    });
  })
}
}

handleChange = (event) => {
  this.setState({
    ...this.state,
    currentUser: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.currentUser}`)
  .then(resp => {
    this.setState({
      ...this.state,
      user: resp.data
    });
  });
}
  render() {
    return(
    <div>
      <div className='user-card'>
        <h1>Github Info</h1>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder='Github Handle'type='text'/>
            <button>Search</button>
          </form>
          <User user={this.state.user}/>
          <FollowerList followers={this.state.followers}/>
      </div>

      <div className="followers">

      </div>
    </div>
    );
  }
}

export default App;
