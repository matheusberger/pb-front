<script setup lang="ts">
import { ref } from 'vue'
import { type Pedal } from '../models/pedal'
import { type Knob } from '../models/knob'

interface Props {
    pedal: Pedal;
    onEdit: () => void;
}
const props = defineProps<Props>();

const pedal = ref(props.pedal)
const isEditing = ref(false)

const toggleEdit = () => {
    isEditing.value = !isEditing.value
}
</script>

<template>
    <div class="pedalItem">
        <div v-if="!isEditing">
            <h3>{{ pedal.name }} - {{ pedal.brand }}</h3>
            <button @click="toggleEdit">edit</button>
            <li class="knobs" v-for="knob in pedal.knobs">
                - {{ knob.name }}
            </li>
        </div>
        <div v-else>
            
        </div>
        
    </div>
</template>

<style>
.pedalItem {
    display: flex;
    flex-direction: column;
}

.knobs {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
}
</style>