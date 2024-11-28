<script>
  var x = 0;
  var y = 0;
  var xi = 1;
  var yi = 1;
  setInterval(() => {
    x += xi
    y += yi
    if (x >= window.innerWidth || x<=0) {
      xi *= -1
    }
    if (y >= window.innerHeight-35 || y<=0) {
      yi *= -1
    }
  })
</script>

<main>
  <div class="A" style="left: {x}px; top: {y}px;">O</div>
</main>

<style>

  div.A {
    position: fixed;
    font-size: 30px;
  }

</style>
