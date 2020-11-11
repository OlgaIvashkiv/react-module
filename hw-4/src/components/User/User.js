import React, {Component} from 'react';

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
                    <button className="btn btn-info">Open posts</button>
                </div>
            </div>
        );
    }
}

export default User;