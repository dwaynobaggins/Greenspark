<template>
    <div class="flex col widget">        
        <div class="flex pill" :class="badgeColour">
            <div class="flex col align-items-center logo">
                <GreensparkLogo :fill="colourBadgeContent(true)" />
                <GreensparkTextLogo :fill="colourBadgeContent(true)" />
            </div>
            <div class="flex col justify-content-center text">
                <span class="action" :class="colourBadgeContent(false)">
                    This product {{ action }}
                </span>
                <span class="amount" :class="colourBadgeContent(false)">
                    {{ amountMessage }}
                </span>
            </div>
        </div>
        <div>
            <div class="flex align-items-start">
                <p>Link to Public Profile</p>
                <div class="tooltip">
                    <Tooltip fill="var(--green)" />
                </div>
                <div class="tooltip-text flex col">
                    <p>This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.</p>
                    <span class="tooltip-green">View Public Profile</span>
                </div>
            </div>
        </div>
        <div class="flex justify-content-space-between">
            <p>Badge colour</p>
            <div class="flex colour-btns">
                <ColourBtn colour="blue" @change-badge-colour="changeBadgeColour"/>
                <ColourBtn colour="green" @change-badge-colour="changeBadgeColour"/>
                <ColourBtn colour="beige" @change-badge-colour="changeBadgeColour"/>
                <ColourBtn colour="white" @change-badge-colour="changeBadgeColour"/>
                <ColourBtn colour="black" @change-badge-colour="changeBadgeColour"/>
            </div>            
        </div>
        <div>
            <p>Activate badge</p>
        </div>        
    </div>
</template>

<style scoped src="./Widget.css" ></style>

<script setup>
    import { ref, computed } from 'vue'

    import GreensparkLogo from '../../../icons/GreensparkLogo.vue';
    import GreensparkTextLogo from '../../../icons/GreensparkTextLogo.vue';
    import Tooltip from '@/components/icons/Tooltip.vue'; 
    import ColourBtn from './ColourBtn/ColourBtn.vue';

    const props = defineProps({
        action: { type: String, default:"" },
        amount: { type: String, default:"" },
        colour: { type: String, default:"" },
    })
    
    const selectedColour = ref(props.colour)

    const amountMessage = computed(() => {
        switch(props.action) {
            case 'offsets':
                return props.amount + "kgs of carbon";
            case 'plants':
                return props.amount + " trees";
            case 'collects':
                return props.amount + " plastic bottles";
            default: 
                break;
        }
    })

    const badgeColour = computed(() => {
        return selectedColour.value + '-bg';
    })

    function colourBadgeContent(isLogo) {        
        switch(selectedColour.value) {
            case 'beige':
                return isLogo ? "var(--green)" : "green";
            case 'blue':
                return isLogo ? "var(--light)" : "light";
            case 'green':
                return isLogo ? "var(--light)" : "light";
            case 'white':
                return isLogo ? "var(--black)" : "black";
            case 'black':
                return isLogo ? "var(--light)" : "light";
            default: 
                break;
        }
    }

    function changeBadgeColour(colour) {
        selectedColour.value = colour;
    }

</script>