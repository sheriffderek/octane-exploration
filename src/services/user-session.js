import Service from '@ember/service';

export default class UserSessionService extends Service {

  // just a quick example
  currentUser = null;

  // services don't hava an 'actions' hash
  // you just create functions - and then maybe in other parts of your app / call these functions in actions
  signIn(username) {
    this.set('currentUser', username);
  }

  signOut() {
    this.set('currentUser', null);
  }

  // import this service anywhere in your app - and use these methods

}
