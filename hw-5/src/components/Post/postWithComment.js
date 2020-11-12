import React, {Component} from 'react';
import {ApiService} from "../../services/service";

class PostWithComment extends Component {

    state = {
        comments: null
    }

    api = new ApiService();

    componentDidMount() {
        const id = this.props.match.params.id;
        this.api.getAllCommentsWithId(id)
            .then(res => res.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        const comments = this.state.comments
        return (
            <div>
                {
                    comments && (
                        comments.map(
                            comment => (

                                <div className="card" key={comment.id}>
                                    <div className="card-body">
                                        <h4 className="card-title">{comment.id} {comment.name}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
                                        <p className="card-text">
                                            {comment.body}
                                        </p>
                                    </div>
                                </div>
                            )
                        )
                    )
                }
            </div>
        );
    }
}

export default PostWithComment;