import React, {Component} from 'react';
import {ApiService} from "../../services/api-service";


class IdForm extends Component {

    state={
        users: [],
        user: {},
        isChosen: false
    }

    api = new ApiService();

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>Please choose ID:</p>
                    <input type="number" placeholder={'Choose ID'} onChange={this.onChooseId}/>
                </form>
                <div>
                    {
                      this.state.isChosen && (
                          this.state.user.map(
                              user => {
                                  return (
                                      <div className="card" key={user.id}>
                                          <div className="card-body">
                                              <h6 className="card-title">{user.id} {user.name}</h6>
                                              <p className="card-subtitle mb-2 text-muted">{user.username}</p>
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

    onFormSubmit=(event)=> {
        event.preventDefault();
    }

    onChooseId=(event)=> {
        const users = this.state.users;
        if (event.target.value<=10) {
            const result = users.filter(user => {
                return user.id === +event.target.value
            });

            this.setState({user: result, isChosen: true})


        } else {
            this.setState({isChosen: false})
        }
    }

    async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

}

export default IdForm;