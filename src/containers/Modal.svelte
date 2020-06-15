<script>
import { startTime, endTime } from '../store/store';
import { formatSecondsDiff } from '../helpers/helpers';

export let visible;
export let onStartGame;
</script>

<style>
.Modal {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.Modal-content {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition-property: width, height;
  transition-duration: 0.7s;
  pointer-events: all;
}

.Modal-content--hidden {
  width: 0px;
  height: 0px;
  border-radius: 50%;
}

.Modal-content--visible {
  width: 200vw;
  height: 200vw;
  border-radius: 0;
}

.Intro-start-game {
  height: 150px;
  width: 150px;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  background-color: transparent;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.Intro-start-game:hover {
  transform: scale(1.1);
}

.Time {
  overflow: hidden;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0px;

  animation-name: bounce-text;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease;
}

@keyframes bounce-text {
  0% { transform: rotateZ(0deg) }
  25% { transform: rotateZ(2deg) }
  50% { transform: rotateZ(-2deg) }
  100% { transform: rotateZ(0deg) }
}
</style>

<div class="Modal">
  <div class={`Modal-content ${visible ? 'Modal-content--visible' : 'Modal-content--hidden'}`}>
    {#if $startTime && $endTime}
      <div class="Time">
        Congratulations! It took you {formatSecondsDiff($startTime, $endTime)} seconds to finish this puzzle
      </div>
    {/if}
    <button class="Intro-start-game" on:click={onStartGame}>Start Game</button>
  </div>
</div>