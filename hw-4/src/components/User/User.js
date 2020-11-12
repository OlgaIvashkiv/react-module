import React, {Component} from 'react';
import {withRouter} from "react-router";



class User extends Component {

    render() {
        const {id, name, username, email} = this.props.user;

        return (
            <div className="card d-flex flex-row">
                <div className="card-body">
                    <h4 className="card-title">{id} {name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                    <p className="card-text">
                        {email}
                    </p>
                    <button className="btn btn-info" onClick={()=>{this.openPosts(id)}}>Open posts</button>
                </div>
            </div>
        );
    }

    openPosts=(id)=> {
        console.log(id)
        this.props.history.push({
            pathname: `/users/${id}`
        })
    }
}

export default withRouter(User);