import React from "react";
import {Route, Switch} from "react-router";

import Users from "./components/User/Users";
import Posts from "./components/Post/Posts";
import Comments from "./components/Comment/Comments";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact render={()=><h1>Welcome to my website</h1>}/>
                <Route path='/users' component={Users}/>
                <Route path='/posts'component={Posts}/>
                <Route path='/comments'component={Comments}/>
            </Switch>
        </div>
    )
}

export default Routes;