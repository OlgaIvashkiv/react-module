import React, {Component} from 'react';
import {ApiService} from "../../services/api-service";


class IdForm extends Component {

    state={
        users: [],
        id: '',
        name: '',
        username: '',
        email: '',
        isChosen: false
    }

    api = new ApiService();

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="number" placeholder={'Choose ID'} onChange={this.onChooseId}/>
                </form>
                <div>
                    {
                      this.state.isChosen && (
                          <div className="card">
                              <div className="card-body">
                                  <h4 className="card-title">{this.state.id} {this.state.name}</h4>
                                  <h6 className="card-subtitle mb-2 text-muted">{this.state.username}</h6>
                                  <p className="card-text">
                                      {this.state.email}
                                  </p>
                              </div>
                          </div>
                      )
                    }
                    {
                        !this.state.isChosen && (
                            <div>
                               <p>No available ID</p>
                            </div>
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
        const users = this.state.users
        if (event.target.value<=10){
        const result = users.filter(user => {
            return user.id === +event.target.value
        });
        result.map(value => {
                this.setState({id: value.id, name: value.name, username: value.username,
                    email: value.email, isChosen: true})
            }
        )
        } else {
            this.setState({isChosen: false})
        }
    }

    async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

}

export default IdForm;