<script>
  import Timeline from "../components/Timeline.svelte";
</script>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main {
    flex: 1;
    border-bottom: 1px solid black;
  }

  footer {
    height: 200px;
  }
</style>

<div class="page-container">
  <div class="main">
    <Timeline/>
  </div>

  <footer />
</div>
