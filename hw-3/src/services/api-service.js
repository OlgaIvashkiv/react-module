export class ApiService {
    _usersUrl = 'https://jsonplaceholder.typicode.com/users';
    _postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    async getAllUsers(){
        return (await fetch(this._usersUrl)).json()
    }

    async getAllPosts(){
        return (await fetch(this._postsUrl)).json()
    }
}

