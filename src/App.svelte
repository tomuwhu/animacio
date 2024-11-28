<script>
  var x = 0;
  var y = 0;
</script>

<main>
  <input type="range" bind:value={x}>
  <input type="range" bind:value={y}>
  <div class="A" style="left: {x}px; top: {y}px;">O</div>
</main>

<style>

  div.A {
    position: fixed;
    font-size: 30px;
  }

</style>
