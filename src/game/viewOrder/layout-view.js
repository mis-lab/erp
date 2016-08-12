import {LayoutView} from 'backbone.marionette';
import template from './template.hbs';
import {Model} from 'backbone';

export default LayoutView.extend({
  template: template,
  className: 'produce',
  
  regions: {
    breadcrumb: '#breadcrumb',
    content: '.content'
  },

  

  initialize(options = {}) {
    this.model = options.model;
  }
});
