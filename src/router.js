import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  // explain the default index route... it's confusing

  this.route('welcome', { path: '/'});
  // explain the available options / second argument etc.
  // it's nice to just set this explicitly

  this.route('sign-in');

  this.route('things', function() {
    // explain the default index route...
    this.route('overview',
      {
        path: '/',
        // optional set of options
      }
    );
    this.route('thing');
    
  });
  
});

export default Router;
