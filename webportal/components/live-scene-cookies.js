import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Component.extend({
  gameApi: service(),
  flashMessages: service(),
  tagName: '',

  @action
  cookies() {
    let api = this.get('gameApi');
    api.requestOne('sceneCookies', { id: this.get('scene.id') }, null)
    .then( (response) => {
      if (response.error) {
        return;
      }
      this.get('flashMessages').success('You give cookies to the scene participants.');
    });
  },
});
