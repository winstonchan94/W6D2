/* jshint esversion: 6 */

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.fromTowerIdx = null;
    this.setupTowers();
    this.render();
  }


  setupTowers() {
    this.$el.empty();
    this.$el.addClass("group");
    let $tower, $disk;

    for (let tIdx = 0; tIdx < 3; tIdx++) {
      $tower = $("<ul>");
      for (let dIdx = 0; dIdx < 3; dIdx++) {
        $disk = $("<li>");
        $tower.append($disk);
      }
      this.$el.append($tower);
    };
  }
  render() {
  }
}

module.exports = View;
