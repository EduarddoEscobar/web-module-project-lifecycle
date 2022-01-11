import React from 'react';

class Follower extends React.Component {

    render(){
        return(
            <div className="follower" onClick={() => this.props.handleGetUser(this.props.user.login)}>
                <img src={this.props.user.avatar_url} alt="Avatar of the user" />
                <h2 className="name">{this.props.user.login}</h2>
            </div>
        )
    }
}

export default Follower;