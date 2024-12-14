<template>
    <div class="flex btn" :class="badgeColour, isSelected" @click="$emit('changeBadgeColour', colour)" >
    </div>
</template>

<style scoped>
    .btn {
        width: 16px;
        height: 16px;
        cursor: pointer;
        box-sizing: border-box;
        transition: var(--default-transition);
    }

    .btn:hover {
        opacity: 0.8;
    }

    .selected {
        border: solid var(--grey-line) 2px;
    }

</style>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps({
        colour: { type: String, default:"" },
        selectedColour: { type: String, default:"" },
    })
    
    const badgeColour = computed(() => {
        return props.colour + '-bg';
    })

    const isSelected = computed(() => {
        return props.colour === props.selectedColour ? 'selected' : '';
    })

</script>