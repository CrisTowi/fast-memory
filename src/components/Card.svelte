<script>
import Infinite from './shapes/Infinite.svelte';

export let onClick;
export let isActive;
export let isFound;

</script>

<style>
.Card {
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
}

.Card-container {
  height: 100%;
  background-color: transparent;
  perspective: 1000px;
  transition: transform 0.8s ease;
}

.Card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition-property: transform;
  transition-duration: 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.Card-inner--active {
  transform: rotateY(180deg);
}

.Card-container--found {
  transform: translateX(-100vw) translateY(-100vh);
}

.Card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.Card-front {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid #B2B2B2;
  color: black;
  display: flex;
  justify-content: center;
  transform: rotateY(180deg);
}

.Card-back {
  background-color: #00000029;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<div on:click={(!isActive && !isFound) ? onClick : null } class="Card">
  <div class={`Card-container ${isFound ? 'Card-container--found' : ''}`}>
    <div class={`Card-inner ${isActive ? 'Card-inner--active' : ''}`}>
      <div class="Card-face Card-front">
        <slot />
      </div>
      <div class="Card-face Card-back">
        <Infinite />
      </div>
    </div>
  </div>
</div>