<template>
  <section id="per-product-widgets" aria-label="Per product widgets" class="flex justify-content-center align-items-center">
    <div class="widgets-container flex">
      <div class="flex col">
          <h3>Per product widgets</h3>
          <hr />
          <div class="flex wrap widgets">
              <Widget v-for="(widget, index) in widgets" @alert-all-toggles="alertAllToggles"
                :index="index"
                :id="widget.id"
                :type="widget.type"
                :amount="widget.amount"
                :action="widget.action"
                :active="widgetsActiveStatus[index]"
                :linked="widget.linked"
                :colour="widget.selectedColor" />
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  import Widget from './widget/Widget.vue';

  const widgets = ref([]);
  const widgetsActiveStatus = ref([])

  const fetchWidgets =  async () => {
    const response = await axios.get('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets');
    widgets.value = response.data;
    
    for (let x = 0; x < widgets.value.length; x++) {
      widgetsActiveStatus.value[x] = widgets.value[x].active;
    }
  }
  
  onMounted(async () => {
    await fetchWidgets();
  })

  const alertAllToggles = (index) => {
    for (let j = 0; j < widgetsActiveStatus.value.length; j++) {
      if (j == index) {
        widgetsActiveStatus.value[j] = true;
      }
      else {
        widgetsActiveStatus.value[j] = false;
      } 
    }
  }

</script>

<style lang="css" scoped>
  .widgets-container {
    background-color: var(--grey-background);
    padding: 36px;
    border-radius: 8px;
    box-shadow: 0 0 20px #00000059;
  }

  .widgets {
    gap: 40px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  @media (min-width: 576px) {
    .widgets {
      flex-direction: row;
      justify-content: center;
    }
  }

  hr {
    display: block;
    border: 1px solid var(--grey-line);
    margin: 1em 0;
  }

</style>
