import React, {Component} from 'react';

class UserItem extends Component {

    render() {
        const {userItem} = this.props
        return (
            <div>
                {
                    userItem.status && (

                        <div>{userItem.name}-{userItem.age}-{userItem.status.toString()}</div>
                    )
                }
                {
                    !userItem.status && (

                        <div>
                            <b>
                                {userItem.name}-{userItem.age}-{userItem.status.toString()}
                            </b>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default UserItem;