import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class SignInController extends Controller {

  // import this service - maybe use a shorter word
  session = service('user-session');

  actions = {
    signIn(name) {
      // this.session.signIn(name);
      console.log( this.get('session') );
    },

    signOut(name) {
      this.session.signOut();
    }
  };

}
