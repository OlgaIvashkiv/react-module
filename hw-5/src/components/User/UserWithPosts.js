import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/service";

const UserWithPosts = (props) => {
    const api = new ApiService();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
            let isSubscribed = true;

            const id = props.match.params.id;
            api.getAllPostsWithId(id)
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
                posts && (
                    posts.map(
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

export default UserWithPosts;