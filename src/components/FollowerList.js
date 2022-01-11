import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render(){
        return(
            <div>
                <h2>Followers: </h2>
                <div className="followers">
                    {this.props.followers.map((follower, ind) => <Follower key={ind} user={follower} />)}
                </div>
            </div>
        )
    }
}

export default FollowerList;