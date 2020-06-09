<script>
import Board from './containers/Board.svelte';
import { cards } from './store/store';
import { generateRandomPairsArrangement } from './helpers/helpers';

const handleStartGame = () => {
	cards.update(generateRandomPairsArrangement);
};
</script>

<main>
	<Board />
	<button on:click={handleStartGame}>Start Game</button>
</main>

<style>

</style>