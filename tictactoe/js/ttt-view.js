class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      let $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    let pos = $square.data("pos");
    let currentPlayer = this.game.currentPlayer;

    this.game.playMove(pos);
    $square.addClass(currentPlayer);
    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");
      let winner = this.game.winner();
      let $figcaption = $("<figcaption>");
      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`${winner} wins`);
      } else {
        $figcaption.html("Tie game");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("grid");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
