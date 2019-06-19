<script>
  import Card from "./Card.svelte";
  function scrollHorizontally(e) {
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    e.target.scrollLeft -= delta * 40;
    e.preventDefault();
  }
</script>

<style>
  .full {
    height: 100%;
    width: 100%;
    overflow-x: auto;
    background-color: #f0f0f0;
  }
</style>

<div
  class="full"
  on:mousewheel={scrollHorizontally}
  on:DOMMouseScroll={scrollHorizontally}>
  <Card />
</div>
