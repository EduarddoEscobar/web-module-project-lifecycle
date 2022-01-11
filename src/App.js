import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import './index.css';

class App extends React.Component {

  state = {
    username: 'eduarddoescobar',
    user: {},
    followers: [],
  }

  handleGetUser = (handle) => {
    axios.get(`https://api.github.com/users/${handle}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data,
          username: handle
        });
      }).catch(err => console.error(err));
  }

  handleGetFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      }).catch(err => console.error(err));
  }

  componentDidMount() {
    this.handleGetUser(this.state.username);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      this.handleGetFollowers()
    }
  }

  render() {
    return(
    <div>
      <User user={this.state.user} handleGetUser={this.handleGetUser} />
      <FollowerList followers={this.state.followers} handleGetUser={this.handleGetUser}/>
    </div>);
  }
}

export default App;
