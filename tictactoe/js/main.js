
const View = require('./ttt-view.js');
const Game = require('../node/game.js');

$( () => {
  // your code here
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
});
