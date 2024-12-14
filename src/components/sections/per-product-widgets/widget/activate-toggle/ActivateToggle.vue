<template>
    <input type="checkbox" :id="id" class="checkbox relative" :disabled="checked" :checked="checked" @change="emit('toggle')" />
    <div class="circle"></div>
    <div class="pill"></div>  
</template>

<style scoped>

    .checkbox {
        cursor: pointer;
        min-width: 40px;
        min-height: 18px;
        appearance: none;
        border-radius: 20px;
        border: 0.59px solid var(--greenish);
        margin: 0;
        background-color: var(--white);
        transition: var(--default-transition);
        display: block;
        box-shadow: 0px 0.88px 5.9px 0px #00000026 inset;

        &:checked {
            background-color: var(--green);
        }

        &:checked ~ .pill  {
            left: 21px;
        }
 
        &:disabled,  &:disabled+label {
            cursor: unset;
        }
        
        &:hover:not([disabled]) + .circle  {
            opacity: 0.5;
        } 
    }
   
    .pill {
        position: absolute;
        transition: var(--default-transition);
        top: -1px;
        left: -1px;
        pointer-events: none;
        border-radius: 50%;
        border: 0.59px solid var(--beige);
        background-color: var(--light);
        width: 20px;
        height: 20px;
    }
 
    .circle {
        position: absolute;
        transition: var(--default-transition);
        top: -6px;
        left: -6px;
        pointer-events: none;
        border-radius: 50%;
        background-color: var(--greenish);
        opacity: 0;
        width: 30px;
        height: 30px;
    }

</style>

<script setup lang="ts">
    const emit = defineEmits(['toggle'])

    const props = defineProps({
        id: { type: String, default:"checkbox" },
        checked: { type: Boolean, default:"" },
    })

</script>