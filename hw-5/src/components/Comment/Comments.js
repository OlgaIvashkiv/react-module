import React, {useEffect, useState} from 'react';
import {ApiService} from "../../services/service";
import Comment from "./Comment";

const Comments = () => {
    const api = new ApiService();

    const [comments, setComments] = useState([]);

    useEffect(() => {

        let isSubscribed = true;
            api.getAllComments()
                .then(res => res.json())
                .then(comments => {
                    if (isSubscribed){
                    setComments(comments)

                    }
                })
            return () => {
                isSubscribed = false
            }
        }
    )

    return (
        <div>
            {
                comments.map(
                    comment => (
                        <Comment comment={comment} key={comment.id}/>
                    )
                )
            }
        </div>
    );
}

export default Comments;