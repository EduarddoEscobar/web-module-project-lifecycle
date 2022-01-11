import React from 'react';

class User extends React.Component {

    state = {
        input: ""
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({
            ...this.state,
            input: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('something happened');
        this.props.handleGetUser(this.state.input);
    }

    render(){
        return(
         <div className="user">
            <h1>Github Card</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="handle-input" placeholder="Github Handle" onChange={this.handleChange}/>
                <button>Search</button>
            </form>
            {this.props.user && 
            <>
                <div className="user-card">
                    <img src={this.props.user.avatar_url} alt="Avatar of the user"/>
                    <div className="user-info">
                        <h2 className="name">{this.props.user.name}</h2>
                        <p>({this.props.user.login})</p>
                        <h3>TOTAL REPOS: {this.props.user.public_repos}</h3>
                        <h3>TOTAL FOLLOWERS: {this.props.user.followers}</h3>
                    </div>
                </div>
            </>
            }
         </div>
        )
    }
}

export default User;