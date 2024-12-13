<template>
    <!-- <input type="checkbox" id="checkbox" :checked="checked" @change="$emit('changeLinked')" /> -->
     
    <input type="checkbox" :id="id" class="checkbox relative" :checked="checked" />
    <div class="circle"></div>
    <div class="tick">
        <Tick width="10" height="10" />
    </div>  
    
</template>

<style scoped>
    
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
        transition: all 200ms ease-in-out;
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
        transition: all 200ms ease-in-out;
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
        transition: all 200ms ease-in-out;
        width: 12px;
        height: 12px;
        opacity: 0;
        top: 4px;
        left: 4px;
        pointer-events: none;
    }

</style>

<script setup lang="ts">
    import Tick from '@/components/icons/tick.vue';

    const props = defineProps({
        id: { type: String, default:"checkbox" },
        checked: { type: Boolean, default:"" },
    })

</script>