export class ApiService {
    _usersUrl = 'https://jsonplaceholder.typicode.com/users';
    _postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    _commentsUrl = 'https://jsonplaceholder.typicode.com/coments';


    async getAllUsers(){
        return (await fetch(this._usersUrl)).json()
    }

    async getAllPosts(){
        return (await fetch(this._postsUrl)).json()
    }

    async getAllComments(){
        return (await fetch(this._commentsUrl)).json()
    }
}