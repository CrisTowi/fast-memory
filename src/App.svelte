<script>
import Board from './containers/Board.svelte';
import Modal from './containers/Modal.svelte';
import data from './data';

import { cards, foundCards, startTime, endTime } from './store/store';
import { generateRandomPairsArrangement } from './helpers/helpers';

const handleStartGame = () => {
	cards.update(generateRandomPairsArrangement);
	foundCards.update(() => []);
	startTime.update(() => new Date());
};
</script>

<style>
.Board-container {
	align-items: center;
	display: flex;
	justify-content: center;
	height: 99vh;
}

@media screen and (max-width: 1260px) {
  .Board-container {
    height: auto;
  }
}
</style>

<main>
	<div class="Board-container">
		<Board />
	</div>
	<Modal
    onStartGame={handleStartGame}
    visible={$cards.length === 0 || $foundCards.length === (data.length * 2)} />
</main>
