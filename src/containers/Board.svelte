<script>
import { cards, activeCards, foundCards, endTime } from '../store/store';
import Card from '../components/Card.svelte';
// Shapes
import Circle from '../components/shapes/Circle.svelte';
import Square from '../components/shapes/Square.svelte';
import Triangle from '../components/shapes/Triangle.svelte';
import EmptySquare from '../components/shapes/EmptySquare.svelte';
import Heart from '../components/shapes/Heart.svelte';
import Diamond from '../components/shapes/Diamond.svelte';

const handleOnCardClick = (card) => {
  if ($activeCards.length === 0) {
    activeCards.update((aC) => [...aC, card.id]);
  } else if ($activeCards.length === 1) {
    activeCards.update((aC) => [...aC, card.id]);
    const activeCardsFromSet = $cards.filter(c => $activeCards.includes(c.id));

    if (activeCardsFromSet[0].value === activeCardsFromSet[1].value) {
      setTimeout(() => {
        foundCards.update((fC) => [...fC, activeCardsFromSet[0].id, activeCardsFromSet[1].id]);
        activeCards.update(() => []);

      if ($foundCards.length === $cards.length) {
        endTime.update(() => new Date());
      }

      }, (600));
    } else {
      setTimeout(() => {
        activeCards.update(() => []);
      }, 1000);
    }
  }
};
</script>

<style>
.Board {
  width: 100%;
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
      {#if card.value === 'heart'}
        <Heart />
      {/if}
      {#if card.value === 'diamond'}
        <Diamond />
      {/if}
    </Card>
  {/each}
</div>