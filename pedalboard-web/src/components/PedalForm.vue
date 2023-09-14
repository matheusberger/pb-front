<script setup lang="ts">
import { mergeProps, ref, type Ref } from 'vue';
import type { Knob } from '@/models/knob';
import type { Pedal } from '@/models/pedal';

interface Props {
    pedal: Pedal
    isEditing: boolean
    onComplete: (pedal: Pedal) => void
};
const props = defineProps<Props>();

const knobCount = ref(props.pedal.knobs.length);
const pedalName = ref(props.pedal.name);
const pedalBrand = ref(props.pedal.brand);
const pedalKnobs: Ref<Knob[]> = ref(props.pedal.knobs);

const savePedal = () => {
    if (pedalName.value != '' && pedalBrand.value != '') {
        const newPedal = { id: props.pedal.id, name: pedalName.value, brand: pedalBrand.value, knobs: pedalKnobs.value }
        props.onComplete(newPedal);

        knobCount.value = 1
        pedalName.value = ''
        pedalBrand.value = ''
        pedalKnobs.value = [{ id: knobCount.value, name: '', value: 0 }]
    }
}

const addKnob = () => {
    knobCount.value++
    pedalKnobs.value.push({ id: knobCount.value, name:'', value: 0})
}

const removeKnob = (knob: Knob) => {
    pedalKnobs.value = pedalKnobs.value.filter((k) => k !== knob)
}
</script>

<template>
    <h2 v-if="!props.isEditing">Create Pedal</h2>
    <form @submit.prevent="savePedal">
        <div class="singleInput">
            <h3>Name</h3>
            <input v-model="pedalName" placeholder="name your pedal">
        </div>
        <div class="singleInput">
            <h3>Brand</h3>
            <input v-model="pedalBrand" placeholder="pedal's brand">
        </div>
        <div class="singleInput">
            <h3>Knobs</h3>
            <button @click="addKnob" type="button">+</button>
        </div>
        <div class="singleInput" v-for="knob in pedalKnobs" :key="knob.id">
            <input v-model="knob.name" placeholder="knob name here">
            <button @click="removeKnob(knob)" type="button">x</button>
        </div>
        <button>save pedal</button>
    </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 20px;
}

.singleInput {
    display: flex;
    flex-direction: row;
    align-items: center;
}

input {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}

button {
    margin: 10px;
    padding: 5px;
    font-weight: bold;
    font-size: large;
    border-radius: 10px;
}
</style>