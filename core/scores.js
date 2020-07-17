import { state, objects } from "./state";
import { emitter, events } from "./emitter";
export class Scores {
  constructor(ctx) {
    this.ctx = ctx;
    this.position = {
      x: this.countXPosition(),
    };

    state.setState(objects.SCORES, { scores: 0 });

    emitter.on(events.SCORE, () => {
      const { scores } = state.getState(objects.SCORES);
      state.setState(objects.SCORES, { scores: scores + 1 });
    });
  }

  countXPosition() {
    const { size: boardSize, cell: boardCell } = state.getState(objects.BOARD);
    return (boardSize + 3) * (boardCell.size + boardCell.spacing);
  }

  render() {
    const { scores } = state.getState(objects.SCORES);
    this.ctx.font = "20px Share Tech Mono";
    this.ctx.fillStyle = "#222f3e";
    this.ctx.fillText("SCORES: " + scores, this.position.x, 50);
  }
}
