<script>
import Board from './containers/Board.svelte';
import Modal from './containers/Modal.svelte';

import { cards, foundCards } from './store/store';
import { generateRandomPairsArrangement } from './helpers/helpers';

const handleStartGame = () => {
	cards.update(generateRandomPairsArrangement);
	foundCards.update(() => []);
};
</script>

<style>
.App {
	display: flex;
	align-items: center;
	height: 90vh;
}

.Intro-start-game {
  height: 150px;
  width: 150px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  background-color: transparent;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

</style>

<main>
	<Board />
	<Modal visible={$cards.length === 0 || $cards.length === $foundCards.length}>
		<div>
			<button class="Intro-start-game" on:click={handleStartGame}>Start Game</button>
		</div>
	</Modal>
</main>
