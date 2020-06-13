<script>
export let visible;
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
  justify-content: center;
  overflow: hidden;
  transition-property: width, height;
  transition-duration: 0.5s;
  pointer-events: all;
}

.Modal-content--hidden {
  width: 0px;
  height: 0px;
  border-radius: 50%;
}

.Modal-content--visible {
  width: 100vw;
  height: 100vw;
  border-radius: 0;
}

</style>

<div class="Modal">
  <div class={`Modal-content ${visible ? 'Modal-content--visible' : 'Modal-content--hidden'}`}>
    <slot />
  </div>
</div>