export class ApiService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllUsers(){
       return fetch(`${this._url}/users`)
    }

    getAllPosts(){
        return fetch(`${this._url}/posts`)
    }

    getAllComments(){
        return fetch(`${this._url}/comments`)
    }
}
