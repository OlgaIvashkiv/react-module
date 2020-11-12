import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/service";
import Post from "./Post";

const Posts = () => {

    const api = new ApiService();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
            let isSubscribed = true;

            api.getAllPosts()
                .then(res => res.json())
                .then(posts => {
                    if (isSubscribed) {
                        setPosts(posts)
                    }
                })

            return () => {
                isSubscribed = false;
            }
        }
    )

    return (
        <div>
            {
                posts.map(
                    post => (
                        <Post post={post} key={post.id}/>
                    )
                )
            }
        </div>
    );

}

export default Posts;