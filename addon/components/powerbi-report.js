import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/powerbi-report';
import pbi from 'powerbi-client';
import $ from 'jquery';

export default Component.extend({
  classNames: ['powerbi-frame'],
  layout,
  powerbi: service('powerbi'),

  accessToken: '',
  component: null,
  embedUrl: null,
  name: null,
  reportId: null,
  options: null,
  tokenType: pbi.models.TokenType.Embed,

  didRender() {
    this._super(...arguments);
    if(this.validateAttributes()) {
      this.embed(this.$());
    }
    else if(this.component) {
      this.reset(this.$());
    }
  },

  embed(element) {
    const config = {
        type: 'report',
        embedUrl: this.embedUrl,
        accessToken: this.accessToken,
        id: this.reportId,
        uniqueId: this.name,
        tokenType: this.tokenType
    };

    $.extend(config, this.options);

    this.component = this.get('powerbi').embed(element, config);
    const action = this.get('onEmbedded');

    if (action) {
      action(this.component);
    }
  },

  reset(element) {
    this.get('powerbi').reset(element);
    this.component = null;
  },

  validateAttributes() {
    return !isEmpty(this.get('embedUrl')) && !isEmpty(this.get('accessToken'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('powerbi').reset(this.$());
  }
});
