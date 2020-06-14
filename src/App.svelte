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

<main>
	<Board />
	<Modal
    onStartGame={handleStartGame}
    visible={$cards.length === 0 || $cards.length === $foundCards.length} />
</main>
