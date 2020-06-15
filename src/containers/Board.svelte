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
import HorizontalStripes from '../components/shapes/HorizontalStripes.svelte';
import VerticalStripes from '../components/shapes/VerticalStripes.svelte';
import Donut from '../components/shapes/Donut.svelte';
import RevertTriangle from '../components/shapes/RevertTriangle.svelte';
import Cross from '../components/shapes/Cross.svelte';
import Pacman from '../components/shapes/Pacman.svelte';

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
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  width: 80%;
}

@media screen and (max-width: 1260px) {
  .Board {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }
}

@media screen and (max-width: 930px) {
  .Board {
    width: 100%;
  }
}


</style>

<div class="Board" style={`
  ${$cards.length === 0 || $cards.length === $foundCards.length ? '' : 'border: 1px solid #B8B8B8;'}
`}>
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
      {#if card.value === 'horizontal-stripes'}
        <HorizontalStripes />
      {/if}
      {#if card.value === 'vertical-stripes'}
        <VerticalStripes />
      {/if}
      {#if card.value === 'donut'}
        <Donut />
      {/if}
      {#if card.value === 'revert-triangle'}
        <RevertTriangle />
      {/if}
      {#if card.value === 'cross'}
        <Cross />
      {/if}
      {#if card.value === 'pacman'}
        <Pacman />
      {/if}
    </Card>
  {/each}
</div>