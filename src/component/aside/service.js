import Marionette from 'backbone.marionette';
import {Collection} from 'backbone';
import Model from './model';
import View from './view';
import menu from './menu.json';

var Controller = Marionette.Object.extend({
  setup(options = {}) {
    this.container = options.container;
  },

  show(type) {
    //var model = (new Model).get(type);
    var model = new Model({ Menu: menu[type]});
    this.model = model;

    this.view = new View({ model: this.model });
    this.container.show(this.view);
  },

  hide() {
    this.container.$el.hide();
  }
});

export default new Controller();