<script>
import { cards } from '../store/store';
import Card from './Card.svelte';
</script>

<style>
.Board {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>

<div class="Board">
  {#each $cards as card}
    <Card>{card}</Card>
  {/each}
</div>