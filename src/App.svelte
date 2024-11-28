<script>
  var [x, y, xi, yi] = [1, 1, 1, 0];
  setInterval(() => {
    x += xi
    y += yi
    yi += 0.01
    xi *= 0.9999 
    yi *= 0.9999
    if (x >= window.innerWidth-60 || x<=0) 
      xi *= -1
    if (y >= window.innerHeight-35 || y<=0)
      yi *= -1
  })
</script>
<main>
  <div class="A" style="left: {x}px; top: {y}px;">DVD</div>
</main>
<style>
  div.A {
    position: fixed;
    font-size: 30px;
  }
</style>
