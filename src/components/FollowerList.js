import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render(){
        return(
            <div>
                <h2 className="followers-title">Followers: </h2>
                <div className="followers">
                    {this.props.followers.map((follower, ind) => <Follower key={ind} user={follower} handleGetUser={this.props.handleGetUser}/>)}
                </div>
            </div>
        )
    }
}

export default FollowerList;