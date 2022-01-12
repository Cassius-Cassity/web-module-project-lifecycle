import React from 'react';
import FollowerList from './FollowerList';

class Follower extends React.Component{

    render(){
        const { follower } = this.props
        return(
            <div>
                <img width='200px' src={follower.avatar_url}/>
                <a target='blank' href={follower.html_url}><p>{follower.login}</p></a>
            </div>
        )
    }
}

export default Follower