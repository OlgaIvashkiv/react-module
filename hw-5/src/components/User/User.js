import React from 'react';
import {withRouter} from "react-router";

const User = (props) => {

        const {user} = props;
        return (
            <div className="card d-flex flex-row">
                <div className="card-body">
                    <h4 className="card-title">{user.id} {user.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                    <p className="card-text">
                        {user.email}
                    </p>
                    <button className="btn btn-info" onClick={()=>{props.history.push({
                        pathname: `/users/${user.id}`
                    })}}>Open posts</button>
                </div>
            </div>
        );
}





export default withRouter(User);