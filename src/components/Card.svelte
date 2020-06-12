<script>
export let onClick;
export let isActive;
export let isFound;
</script>

<style>
.Card {
  height: 200px;
  border-radius: 5px;
  background-color: transparent;
  perspective: 1000px;
}

.Card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.Card-inner--active {
  transform: rotateY(180deg);
}

.Card-inner--found {
  transform: rotateY(180deg);
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
  background-color: #bbb;
  color: black;
}

</style>
<div on:click={(!isActive && !isFound) ? onClick : null } class="Card">
  <div class={`Card-inner ${isActive ? 'Card-inner--active' : ''} ${isFound ? 'Card-inner--found' : ''}`}>
    <div class="Card-face Card-front">
      <div class="Card-face-shape">
        <slot />
      </div>
    </div>
    <div class="Card-face Card-back">
      Back
    </div>
  </div>
</div>