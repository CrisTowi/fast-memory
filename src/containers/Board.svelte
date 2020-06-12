<script>
import { cards, activeCards, foundCards } from '../store/store';
import Card from '../components/Card.svelte';
// Shapes
import Circle from '../components/Circle.svelte';
import Square from '../components/Square.svelte';
import Triangle from '../components/Triangle.svelte';
import EmptySquare from '../components/EmptySquare.svelte';

const handleOnCardClick = (card) => {
  if ($activeCards.length === 0) {
    activeCards.update((aC) => [...aC, card.id]);
  } else if ($activeCards.length === 1) {
    activeCards.update((aC) => [...aC, card.id]);
    const activeCardsFromSet = $cards.filter(c => $activeCards.includes(c.id));

    if (activeCardsFromSet[0].value === activeCardsFromSet[1].value) {
      foundCards.update((fC) => [...fC, activeCardsFromSet[0].id, activeCardsFromSet[1].id]);
      activeCards.update(() => []);
    } else {
      setTimeout(() => {
        activeCards.update(() => []);
      }, 1500);
    }
  }
};
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
    <Card
      isActive={$activeCards.includes(card.id)}
      isFound={$foundCards.includes(card.id)}
      onClick={() => handleOnCardClick(card)}>
      {#if card.value === 'square'}
        <Square />
      {/if}
      {#if card.value === 'circle'}
        <Circle />
      {/if}
      {#if card.value === 'triangle'}
        <Triangle />
      {/if}
      {#if card.value === 'empty-square'}
        <EmptySquare />
      {/if}
    </Card>
  {/each}
</div>