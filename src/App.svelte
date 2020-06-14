<script>
import Board from './containers/Board.svelte';
import Modal from './containers/Modal.svelte';

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
</style>

<main>
	<div class="Board-container">
		<Board />
	</div>
	<Modal
    onStartGame={handleStartGame}
    visible={$cards.length === 0 || $cards.length === $foundCards.length} />
</main>
