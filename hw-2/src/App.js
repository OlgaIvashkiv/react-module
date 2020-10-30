import './App.css';
import React from "react";
import UserList from "./components/user-list/User-list";
import PostList from "./components/posts-list/Post-list";
import CommentList from "./components/comments/Comment-list";

function App() {
  return (

       <div className="d-flex justify-content-around">
           <div className="p-2"><UserList /></div>
           <div className="p-2"><PostList/></div>
           <div className="p-2"><CommentList/></div>
       </div>

  );
}

export default App;
