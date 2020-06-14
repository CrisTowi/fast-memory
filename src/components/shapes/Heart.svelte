<style>
  .Heart {
    transition: none;
    height: 100px;
    margin-top: 20px;
    position: relative;
    width: 100px;
  }

  .Heart:before,
  .Heart:after {
    transition: none;
    background: purple;
    border-radius: 50px 50px 0 0;
    content: "";
    height: 80px;
    left: 50px;
    position: absolute;
    top: 0;
    transform-origin: 0 100%;
    transform: rotate(-45deg);
    width: 50px;
  }

  .Heart:after {
    transition: none;
    left: 0;
    transform-origin: 100% 100%;
    transform: rotate(45deg);
  }
</style>

<div class="Heart">

</div>