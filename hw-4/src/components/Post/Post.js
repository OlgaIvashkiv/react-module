import React, {Component} from 'react';
import {withRouter} from "react-router";

class Post extends Component {


    render() {
    const {post} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{post.id}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
                    <p className="card-text">
                        {post.body}
                    </p>
                    <button className={"btn btn-danger"} onClick={()=> {this.props.history.push(`/posts/${post.id}`)}}>Open Comments</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Post);