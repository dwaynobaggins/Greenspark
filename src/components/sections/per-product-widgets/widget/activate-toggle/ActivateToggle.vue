<template>
    <input type="checkbox" :id="id" class="checkbox relative" :checked="checked" @change="emit('toggle')" />
    <!-- <input type="checkbox" :id="id" class="checkbox relative" :checked="checked" /> -->
    <div class="circle"></div>  
</template>

<style scoped>
/*     
    .checkbox {
        z-index: 1;
        cursor: pointer;
        min-width: 18px;
        min-height: 18px;
        appearance: none;
        border-radius: 4px;
        border: solid var(--black) 2px;
        margin: 0;
        background-color: var(--white);
        transition: var(--default-transition);
        display: block;

        &:checked {
            background-color: var(--green);
        }

        &:checked ~ .tick  {
            opacity: 1;
        }

        &:disabled,  &:disabled+label {
            opacity: 0.4;
        }
        
        &:hover  {
            border: solid var(--grey-line) 2px;
        }

        &:hover + .circle  {
            opacity: 0.5;
        }
    }

    .circle {
        position: absolute;
        transition: var(--default-transition);
        top: -6px;
        left: -6px;
        border-radius: 50%;
        background-color: #AFC6BD;
        opacity: 0;
        width: 30px;
        height: 30px;
    }

    .tick {
        position: absolute;
        z-index: 5;
        transition: var(--default-transition);
        width: 12px;
        height: 12px;
        opacity: 0;
        top: 4px;
        left: 4px;
        pointer-events: none;
    } */

</style>

<script setup lang="ts">
    import { ref } from 'vue'

    const emit = defineEmits(['toggle'])

    const props = defineProps({
        id: { type: String, default:"checkbox" },
        checked: { type: Boolean, default:"" },
    })

</script>