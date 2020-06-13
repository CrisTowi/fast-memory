<script>
import Board from './containers/Board.svelte';
import { cards } from './store/store';
import { generateRandomPairsArrangement } from './helpers/helpers';

const handleStartGame = () => {
	cards.update(generateRandomPairsArrangement);
};
</script>

<style>
.App {
	display: flex;
	align-items: center;
	height: 90vh;
}
</style>

<main>
	<button on:click={handleStartGame}>Start Game</button>
	<div class="App">
		<Board />
	</div>
</main>
