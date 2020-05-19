import { TennisGame } from "./tennis-game/tennis-game";
import { Player } from "./tennis-game/player";

const playerOne: Player = { name: "Djoko", score: 0 };
const playerTwo: Player = { name: "Nadal", score: 0 };

const tennisGame = new TennisGame(playerOne, playerTwo);
tennisGame.play();
