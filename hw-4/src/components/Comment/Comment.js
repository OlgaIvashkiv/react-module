import React, {Component} from 'react';

class Comment extends Component {

    render() {
        const comment = this.props.comment
        return (
            <div>
                {
                    comment && (
                        <div className="card" key={comment.id}>
                            <div className="card-body">
                                <h4 className="card-title">{comment.id}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{comment.title}</h6>
                                <p className="card-text">
                                    {comment.body}
                                </p>

                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Comment;