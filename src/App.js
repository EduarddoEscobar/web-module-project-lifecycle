import React from 'react';
import User from './components/User';
import axios from 'axios';
import './index.css';

class App extends React.Component {

  state = {
    user: {},
    followers: [],
  }

  componentDidMount() {
    const handle = 'eduarddoescobar';
    axios.get(`https://api.github.com/users/${handle}`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          user: res.data
        });
      }).catch(err => console.error(err));
  }

  render() {
    return(
    <div>
      <User user={this.state.user} />
    </div>);
  }
}

export default App;
