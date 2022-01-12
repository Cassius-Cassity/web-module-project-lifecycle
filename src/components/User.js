import React from 'react';

class User extends React.Component{
    render(){
    const { user } = this.props;
        return(
            <div>
                <img src={user.avatar_url} />
                <a target='blank' href={user.html_url}><h2>{user.name}</h2></a>
                <p>User Name: {user.login}</p>
                <p>Repos: {user.public_repos}</p>
                <p>Followers: {user.followers}</p>
            </div>
        )
    }
}

export default User