<template>
    <div class="flex btn" :class="badgeColour" @click="$emit('changeBadgeColour', colour)" >
    </div>
</template>

<style scoped>
    .btn {
        width: 16px;
        height: 16px;
        cursor: pointer;
        box-sizing:border-box;
    }

    .btn:hover {
        border: solid var(--grey-line) 2px;
    }

</style>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        colour: { type: String, default:"" },
    })
    
    const badgeColour = computed(() => {
        return props.colour + '-bg';
    })

</script>