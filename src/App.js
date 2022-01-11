import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import './index.css';

class App extends React.Component {

  state = {
    user: {},
    followers: [],
  }

  handleGetUser = (handle) => {
    axios.get(`https://api.github.com/users/${handle}`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          user: res.data
        });
      }).catch(err => console.error(err));
  }

  handleGetFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          followers: res.data
        });
      }).catch(err => console.error(err));
  }

  componentDidMount() {
    this.handleGetUser('eduarddoescobar');
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
      this.handleGetFollowers()
    }
  }

  render() {
    return(
    <div>
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />
    </div>);
  }
}

export default App;
