import React, {Component} from 'react';
import {ApiService} from "../../services/service";
import User from "./User";


class Users extends Component {

    api = new ApiService()

    state = {
        users: []
    }

    componentDidMount() {
        this.api.getAllUsers()
            .then(res => res.json())
            .then(users => {
                this.setState({users})
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(
                        user => (
                            <User user={user} key={user.id}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Users;