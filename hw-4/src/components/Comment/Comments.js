import React, {Component} from 'react';
import {ApiService} from "../../services/service";
import Comment from "./Comment";

class Comments extends Component {
    api = new ApiService();
    state = {
        comments: []
    }

    componentDidMount() {
        this.api.getAllComments()
            .then(res => res.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(
                        comment => (
                            <Comment comment={comment}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Comments;