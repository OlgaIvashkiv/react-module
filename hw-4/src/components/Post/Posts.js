import React, {Component} from 'react';
import {ApiService} from "../../services/service";
import Post from "./Post";

class Posts extends Component {

    api = new ApiService();
    state = {
        posts: []
    }

    componentDidMount() {
        this.api.getAllPosts()
            .then(res => res.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(
                        post=> (
                            <Post post={post} key={post.id}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Posts;