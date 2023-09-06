<script setup lang="ts">
import { ref } from 'vue'
import { type Pedal } from '../models/pedal'
import PedalForm from './PedalForm.vue';

interface Props {
    pedal: Pedal;
    onEdit: (pedal: Pedal) => void;
}
const props = defineProps<Props>();

const pedal = ref(props.pedal)
const isEditing = ref(false)

const toggleEdit = () => {
    isEditing.value = !isEditing.value
}
const handleEdit = (pedal: Pedal) => {
    toggleEdit();
    props.onEdit(pedal);
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
            <button @click="toggleEdit">cancel</button>
            <PedalForm :pedal="pedal" :isEditing="true" :onComplete="handleEdit"/>
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