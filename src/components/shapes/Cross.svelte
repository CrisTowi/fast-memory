<style>
.Cross {
  background: pink;
  height: 100px;
  position: relative;
  width: 20px;
}
.Cross:after {
  background: pink;
  content: "";
  height: 20px;
  left: -40px;
  position: absolute;
  top: 40px;
  width: 100px;
}

@media screen and (max-width: 560px) {
  .Cross {
    height: 75px;
    width: 15px;
  }

  .Cross:after {
    height: 15px;
    width: 75px;
    left: -30px;
    top: 30px;
  }
}
</style>

<div class="Cross">

</div>