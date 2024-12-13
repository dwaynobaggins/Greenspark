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
                <span class="amount" :class="colourBadgeContent(false), isSmallAmountMessage">
                    {{ amountMessage }}
                </span>
            </div>
        </div>
        <div>
            <div class="flex justify-content-space-between">
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
                <div class="relative">
                    <LinkedCheckbox :id="type + '-cb'" :checked="linkedToProfile" />
                </div>
            </div>
        </div>
        <div class="flex justify-content-space-between">
            <p>Badge colour</p>
            <div class="flex colour-btns">
                <ColourBtn v-for="colour in colourOptions" :colour="colour" :selectedColour="selectedColour" @change-badge-colour="changeBadgeColour" />
            </div>            
        </div>
        <div>
            <p>Activate badge</p>
        </div>     
    </div>
</template>

<style scoped src="./Widget.css" ></style>

<script setup lang="ts">
    import { ref, computed } from 'vue'

    import GreensparkLogo from '../../../icons/GreensparkLogo.vue';
    import GreensparkTextLogo from '../../../icons/GreensparkTextLogo.vue';
    import LinkedCheckbox from './linked-checkbox/LinkedCheckbox.vue';
    import Tooltip from '@/components/icons/Tooltip.vue'; 
    import ColourBtn from './colour-btn/ColourBtn.vue';

    const props = defineProps({
        id: { type: Number, default:0 },
        type: { type: String, default:"" },
        amount: { type: Number, default:0 },
        action: { type: String, default:"" },
        active: { type: Boolean, default:false },
        linked: { type: Boolean, default:false },
        colour: { type: String, default:"" },
    })

    const colourOptions = [ "white" , "black" , "blue" ,"green" , "beige"];
    const selectedColour = ref(props.colour)
    const linkedToProfile = ref(props.linked)

    const amountMessage = computed(() => {
        switch(props.type) {
            case 'carbon':
                return props.amount + "kgs of carbon";
            case 'trees':
                return props.amount + " trees";
            case 'plastic':
                return props.amount + " plastic bottles";
            default: 
                break;
        }
    })
    const isSmallAmountMessage = computed(() => {
        return props.amount.toString().length > 2 ? 'smaller' : '';
    })

    const badgeColour = computed(() => {
        return selectedColour.value + '-bg';
    })

    const colourBadgeContent = (isLogo) => {        
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
    
    const changeBadgeColour = (colour) => {
        selectedColour.value = colour;
    }

</script>