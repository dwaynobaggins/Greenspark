<template>
  <section id="per-product-widgets" aria-label="Per product widgets" class="flex justify-content-center align-items-center">
    <div class="widgets-container flex">
      <div class="flex col gap-xs">
          <h3>Per product widgets</h3>
          <hr />
          <div class="flex wrap justify-content-center widgets gap-48">
              <Widget action="collects" amount="100" colour="green" />
              <Widget action="offsets" amount="2" colour="beige" />
              <Widget action="plants" amount="2" colour="blue" />
          </div>
      </div>
    </div>
  </section>

  
</template>

<script setup>
  import Widget from './widget/Widget.vue';
</script>

<style lang="css" scoped>
  .widgets-container {
    background-color: var(--grey-background);
    width: max-content;
    padding: 36px;
    border-radius: 8px;
    box-shadow: 0 0 20px #00000059;
  }

  hr {
    display: block;
    border: 1px solid var(--grey-line);
    margin: 1em 0;
  }

  .widgets {
    gap: 40px;
  }

</style>
