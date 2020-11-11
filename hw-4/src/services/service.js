export class ApiService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllUsers(){
       return fetch(`${this._url}/users`)
    }

    getAllPosts(){
        return fetch(`${this._url}/posts`)
    }

    getAllPostsWithId(id){
        return fetch(`${this._url}/posts?userId=${id}`)
    }

    getAllCommentsWithId(id){
        return fetch(`${this._url}/comments?postId=${id}`)
    }

    getAllComments(){
        return fetch(`${this._url}/comments`)
    }
}
