import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/service";
import User from "./User";


const Users = () => {

    const api = new ApiService();

    const [users, setUsers] = useState([]);

    useEffect(() => {
            let isSubscribed = true;

            api.getAllUsers()
                .then(res => res.json())
                .then(users => {
                    if (isSubscribed) {
                        setUsers(users)
                    }
                })
            return () => {
                isSubscribed = false
            }

        }
    )


    return (
        <div>
            {
                users.map(
                    user => (
                        <User user={user} key={user.id}/>
                    )
                )
            }
        </div>
    );

}


export default Users;