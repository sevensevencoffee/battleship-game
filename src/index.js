import Player from './player';
import { renderGameboards } from './dom';
import { setupShipPlacement } from './shipPlacement';
import './styles.css';

let player, computer;
export let isGameOver = false;

document.addEventListener('DOMContentLoaded', () => {
  player = new Player();
  computer = new Player(true);

  // Place ships for the computer randomly
  computer.placeShipsRandomly();

  // Render the initial gameboards
  renderGameboards(player.gameboard, null);

  // Set up ship placement for the player
  setupShipPlacement(player);
  console.log('Game initialized');
});

import { cleanupShipPlacement } from './shipPlacement';
import { setupEventListeners } from './dom';

export function startGame() {
  // Clean up ship placement event listeners
  if (typeof cleanupShipPlacement === 'function') {
    cleanupShipPlacement();
  }

  // Render the gameboards with both player and computer boards
  renderGameboards(player.gameboard, computer.gameboard);

  // Set up the main game event listeners
  setupEventListeners(player, computer);
  console.log('Game started');
}

export function gameOver(winner) {
  isGameOver = true;
  console.log(`Game Over! ${winner} wins!`);
  const gameOverMessage = document.createElement('div');
  gameOverMessage.id = 'game-over-message';
  gameOverMessage.textContent = `Game Over! ${winner} wins!`;
  gameOverMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 24px;
    z-index: 1000;
    text-align: center;
  `;

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Game';
  restartButton.style.cssText = `
    display: block;
    margin-top: 10px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  restartButton.addEventListener('click', () => {
    location.reload();
  });

  gameOverMessage.appendChild(restartButton);
  document.body.appendChild(gameOverMessage);

  // Disable further clicks on the game board
  const actionButtons = document.querySelectorAll('.cell');
  actionButtons.forEach(button => {
    button.style.pointerEvents = 'none';
  });
}