<script>
  var [x, y, xi, yi] = [1, 1, 0, 0];
  var ex = 0, ey = 0
  setInterval(() => {
    x += xi
    y += yi
    xi -= (x - ex + 20) * 0.0001
    yi -= (y - ey) * 0.0001
    if (x >= window.innerWidth-60)
      xi = -Math.abs(xi) / 2
    if (x <= 0) 
      xi = Math.abs(xi) / 2
    if (y >= window.innerHeight-35)
      yi = -Math.abs(yi) / 2
    if (y <= 0)
    yi = Math.abs(yi) / 2
  })
</script>
<main>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="eg" on:mousemove={(e) => {
    ex = e.clientX; ey = e.clientY
  }}>
    <div class="A" style="left: {x}px; top: {y}px;">DVD</div>
    <div class="B" style="left: {ex}px; top: {ey}px;">O</div>
  </div>
</main>
<style>
  div.eg {
    position: fixed;
    top: 0px;
    left: 0px;
    cursor: none;
    width: 100%;
    height: 100%;
  }

  div.A, div.B {
    position: fixed;
    font-size: 30px;
  }
</style>
