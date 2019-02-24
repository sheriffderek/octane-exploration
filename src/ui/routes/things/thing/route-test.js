import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | things/thing', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:things/thing');
    assert.ok(route);
  });
});
