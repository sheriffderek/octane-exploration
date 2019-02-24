import Route from '@ember/routing/route';

export default class WelcomeRoute extends Route {

  // a controller is always generated behind the scenes for every route -
  // sometimes you want to explicity create one and write functionality there - 
  // but sometimes you just don't need one - or you just want to set 1 property
  // and sometimes you need to set a property based on something that is decided when entering the route
  // in either case / you can use this method to 'setup' (set controller properties)
  setupController(controller, model) {
    controller.set('message', `Default message`);
    console.log(`welcome controller`);
    console.log(`message:`, `"${controller.message}"`);
    console.log(`model:`, model);
  }

  // show some example of "logged in" or something... if logged in... so this other thing...
  // maybe a good place to show a service

}
