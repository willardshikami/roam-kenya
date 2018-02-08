import { apiWrapper } from './ApiFunctions';

class UsersApi {

  static getUsers() {
    const url = '/api/users';
    return apiWrapper('GET', url, {});
  }

  static getUser() {
    const url = '/api/users';
    return apiWrapper('GET', url, {});
  }

   static updateUser(fingerprint) {
     const url = '/api/users/'+fingerprint;
     return apiWrapper('PUT', url, {"user": { "name": "Example User"}} )
   } 
}

export default UsersApi;