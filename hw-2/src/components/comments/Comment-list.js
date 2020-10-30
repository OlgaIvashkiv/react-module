import React, {Component} from 'react';
import {ApiService} from "../../services/ApiService";
import Comment from "../comment/Comment";

class CommentList extends Component {
    api = new ApiService();
    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getAllComments()})
    }

    render() {

        return (
            <div>
                {
                    this.state.comments.map(comment =>(
                        <Comment comment={comment} key={comment.id}/>
                    ))
                }
            </div>
        );
    }
}

export default CommentList;