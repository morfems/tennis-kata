import { TennisGame } from "./tennis-game";
import { Player } from "./player";

describe("hasEnded", () => {
  it("should return false when both scores are bellow 4", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 0 };
    const playerTwo: Player = { name: "Nadal", score: 0 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const gameHasEnded = tennisGame.hasEnded();

    // Then
    expect(gameHasEnded).toEqual(false);
  });

  it("should return false when at least one score is 4 the other is 3", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 4 };
    const playerTwo: Player = { name: "Nadal", score: 3 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const gameHasEnded = tennisGame.hasEnded();

    // Then
    expect(gameHasEnded).toEqual(false);
  });

  it("should return false when both scores are 4", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 4 };
    const playerTwo: Player = { name: "Nadal", score: 4 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const gameHasEnded = tennisGame.hasEnded();

    // Then
    expect(gameHasEnded).toEqual(false);
  });

  it("should return true when one's score is 5 and the other's is 3", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 5 };
    const playerTwo: Player = { name: "Nadal", score: 3 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const gameHasEnded = tennisGame.hasEnded();

    // Then
    expect(gameHasEnded).toEqual(true);
  });

  it("should return true when one's score is 7 and the other's is 5", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 7 };
    const playerTwo: Player = { name: "Nadal", score: 5 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const gameHasEnded = tennisGame.hasEnded();

    // Then
    expect(gameHasEnded).toEqual(true);
  });
});

describe("getWinnerName", () => {
  it("should return the right winner's name", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 6 };
    const playerTwo: Player = { name: "Nadal", score: 4 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const winnerName = tennisGame.getWinnerName();

    // Then
    expect(winnerName).toEqual("Djoko");
  });
});

describe("isDeuce", () => {
  it("should return true when the game is deuce", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 6 };
    const playerTwo: Player = { name: "Nadal", score: 6 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const isDeuce = tennisGame.isDeuce();

    // Then
    expect(isDeuce).toEqual(true);
  });

  it("should return false when the game is not deuce", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 6 };
    const playerTwo: Player = { name: "Nadal", score: 7 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const isDeuce = tennisGame.isDeuce();

    // Then
    expect(isDeuce).toEqual(false);
  });

  it("should return false when the game is not deuce", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 2 };
    const playerTwo: Player = { name: "Nadal", score: 2 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const isDeuce = tennisGame.isDeuce();

    // Then
    expect(isDeuce).toEqual(false);
  });
});

describe("hasAdvantage", () => {
  it("should return true when the game has advantage", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 5 };
    const playerTwo: Player = { name: "Nadal", score: 4 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const hasAdvantage = tennisGame.hasAdvantage();

    // Then
    expect(hasAdvantage).toEqual(true);
  });

  it("should return false when the game doesn't have advantage", () => {
    // Given
    const playerOne: Player = { name: "Djoko", score: 1 };
    const playerTwo: Player = { name: "Nadal", score: 2 };
    const tennisGame = new TennisGame(playerOne, playerTwo);

    // When
    const hasAdvantage = tennisGame.hasAdvantage();

    // Then
    expect(hasAdvantage).toEqual(false);
  });
});
