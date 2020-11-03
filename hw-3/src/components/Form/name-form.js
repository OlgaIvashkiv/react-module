import React, {Component} from 'react';
import {ApiService} from "../../services/api-service";

class NameForm extends Component {
    api = new ApiService();

    state={
        users: [],
        filteredUsers: [],
        isChosen: false
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" onChange={this.onNameInput}/>
                </form>
                <div>
                    {
                        this.state.isChosen && (
                                this.state.filteredUsers.map(
                                user => {
                                    return (
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{user.id} {user.name}</h4>
                                                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                                                <p className="card-text">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            )

                        )

                    }
                </div>
            </div>

        );
    }

    async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

    onNameInput=(event)=> {
        const users = this.state.users;
        if (event.target.value){
            const result = users.filter(value => value.name.toLowerCase().includes(event.target.value.toLowerCase()));

            this.setState({filteredUsers: result, isChosen: true})
        } else {
            this.setState({isChosen: false})
        }


    }
}

export default NameForm;