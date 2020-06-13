<style>
  .Infinite {
    margin-top: 20px;
    position: relative;
    width: 164px;
    height: 100px;
    box-sizing: content-box;
  }

  .Infinite:before,
  .Infinite:after {
    content: "";
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 20px solid #75BFA6;
    border-radius: 50px 50px 0 50px;
    transform: rotate(-45deg);
  }

  .Infinite:after {
    left: auto;
    right: 0;
    border-radius: 50px 50px 50px 0;
    transform: rotate(45deg);
  }
</style>

<div class="Infinite">
</div>