import Route from '@ember/routing/route';
import thingsData from '../../../data/things-data';
// there's a better way to do this ^  'octane-app/data/things-data'

export default class ThingsRoute extends Route {

  model() {
    return thingsData;
    // explain how this sets the property 'model' on the conroller
  }

}
