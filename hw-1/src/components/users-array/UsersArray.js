import React, {Component} from 'react';
import {users} from "../../data/data";
import UserItem from "../user-item/UserItem";

class UsersArray extends Component {
    render() {
        return (
            <div>
                {
                    users.map(user=>{
                        return (
                            <UserItem userItem={user} key={user.id}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default UsersArray;