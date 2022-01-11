import React from 'react';

class Follower extends React.Component {

    render(){
        console.log(this.props.user);
        return(
            <div className="follower">
                <img src={this.props.user.avatar_url} alt="Avatar of the user" />
                <h2 className="name">{this.props.user.name}</h2>
            </div>
        )
    }
}

export default Follower;