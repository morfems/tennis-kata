import { Player } from "./player";
import { translatePoints } from "./translatePoints";

export class TennisGame {
  constructor(private playerOne: Player, private playerTwo: Player) {}

  play(): void {
    while (!this.hasEnded()) {
      console.log(this.getScore());
      this.serve();
    }

    console.log(`Game ${this.getWinnerName()}`);
  }

  private serve(): void {
    const pointWinner = this.getPointWinner();

    pointWinner.score = pointWinner.score + 1;
  }

  private getPointWinner() {
    const players: Player[] = [this.playerOne, this.playerTwo];
    return players[Math.floor(Math.random() * players.length)];
  }

  getScore(): string {
    const { name: PlayerOneName, score: playerOneScore } = this.playerOne;
    const { name: PlayerTwoName, score: playerTwoScore } = this.playerTwo;

    if (this.isDeuce()) {
      return "Deuce";
    }

    if (this.hasAdvantage()) {
      return `Advantage ${this.getWinnerName()}`;
    }

    return (
      `${PlayerOneName} ${translatePoints(playerOneScore)} - ` +
      `${translatePoints(playerTwoScore)} ${PlayerTwoName}`
    );
  }

  isDeuce(): boolean {
    return this.playerOne.score >= 3 && this.playerTwo.score === this.playerOne.score;
  }

  hasAdvantage(): boolean {
    const { score: playerOneScore } = this.playerOne;
    const { score: playerTwoScore } = this.playerTwo;

    if (playerTwoScore >= 4 && playerTwoScore === playerOneScore + 1) return true;
    if (playerOneScore >= 4 && playerOneScore === playerTwoScore + 1) return true;

    return false;
  }

  hasEnded(): boolean {
    const { score: playerOneScore } = this.playerOne;
    const { score: playerTwoScore } = this.playerTwo;

    if (playerOneScore < 4 && playerTwoScore < 4) return false;
    if (Math.abs(playerTwoScore - playerOneScore) < 2) return false;

    return true;
  }

  getWinnerName(): string {
    if (this.playerOne.score > this.playerTwo.score) {
      return this.playerOne.name;
    }

    return this.playerTwo.name;
  }
}
