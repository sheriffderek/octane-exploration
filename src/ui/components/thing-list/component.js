import Component from '@ember/component';

export default class ThingListComponent extends Component {

  // Element
  tagName = 'ul';
  classNames = ['thing-list'];

  // Passed in
  things = null;

}
