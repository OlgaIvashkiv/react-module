import React, {Component} from 'react';
import {ApiService} from "../../services/ApiService";
import User from "../user/User";

class UserList extends Component {
    api = new ApiService();
    state = {users: []};

    async componentDidMount() {
       this.setState({users: await this.api.getAllUsers()});
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (
                        <User user={user} key={user.id}/>
                    ))
                }
            </div>
        );
    }
}

export default UserList;