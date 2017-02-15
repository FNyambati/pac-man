import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

export default Ember.Component.extend(KeyboardShortcuts, {
  didInsertElement: function() {
    this.drawCircle();
  },
  drawCircle: function() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let x = 60;
    let y = 100;
    let radius = 20;

    ctx.fillSyle = '#000';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  },
  KeyboardShortcuts: {
  up: function() { console.log('up');},
  down: function() { console.log('down');},
  left: function() { console.log('left');},
  right: function() { console.log('right');},
}
});
