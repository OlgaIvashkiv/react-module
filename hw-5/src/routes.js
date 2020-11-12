import React from "react";
import {Route, Switch} from "react-router";
import UserWithPosts from "./components/User/UserWithPosts";
import PostWithComment from "./components/Post/postWithComment";
import Users from "./components/User/Users";
import Posts from "./components/Post/Posts";
import Comments from "./components/Comment/Comments";



const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/users/:id' component={UserWithPosts}/>
                <Route path='/posts/:id' component={PostWithComment}/>
                <Route path='/users' component={Users}/>
                <Route path='/posts'component={Posts}/>
                <Route path='/comments'component={Comments}/>
                <Route path='/' exact component={()=> <h1>Welcome to my website</h1>}/>

            </Switch>
        </div>
    )
}

export default Routes;