
import _ from 'lodash';
import $ from 'jquery';
import {history} from 'backbone';
import {ItemView} from 'backbone.marionette';
import template from './template.hbs';

export default ItemView.extend({
  template: template,
  tagName: 'aside',
  className: 'sidebar',

  attributes: {
    role: 'sidebar'
  },

  templateHelpers() {
    return _.invoke(this.model, 'toJSON');
  },

  ui: {
    openableMenu: '#accordion .link',
    sizeToggle: '#sizeToggle',
  },

  events: {
    'click @ui.sizeToggle': 'toggleMenu',
    'click @ui.openableMenu': 'toggleSubMenu'
  },

  toggleMenu(e) {
    e.preventDefault();
    
    this.$el.toggleClass('slide-hide');
    this.$el.parents('.application').toggleClass('wide');
  },

  toggleSubMenu(e) {
    var $this = $(e.target);
    var $next = $this.next();
    $next.slideToggle();
    this.$('.submenu').not($next).slideUp();
    $this.parent().toggleClass('open');
    $this.parent().siblings().removeClass('open');
  }
});
