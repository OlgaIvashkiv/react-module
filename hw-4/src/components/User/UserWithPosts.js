import React, {Component} from 'react';
import {ApiService} from "../../services/service";

class UserWithPosts extends Component {
    api = new ApiService();

    state = {
        posts: null
    }

    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.id;
        this.api.getAllPostsWithId(id)
            .then(res => res.json())
            .then(posts => {
                this.setState({posts})
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.posts && (
                        this.state.posts.map(
                            post => (
                                <div className="card" key={post.id}>
                                    <div className="card-body">
                                        <h4 className="card-title">{post.id} {post.userId}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
                                        <p className="card-text">
                                            {post.body}
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

export default UserWithPosts;