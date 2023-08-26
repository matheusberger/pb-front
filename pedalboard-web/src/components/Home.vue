<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { type Pedal } from '../models/pedal'
import { type Knob } from '../models/knob'

const pedals: Ref<Pedal[]> = ref([])

const knobCount = ref(1);
const pedalName = ref('')
const pedalBrand = ref('')
const pedalKnobs: Ref<Knob[]> = ref([{ id: knobCount.value, name: '', value: 0 }])

const addPedal = () => {
    if (pedalName.value != '' && pedalBrand.value != '') {
        pedals.value.push({ name: pedalName.value, brand: pedalBrand.value, knobs: pedalKnobs.value })

        knobCount.value = 1
        pedalName.value = ''
        pedalBrand.value = ''
        pedalKnobs.value = [{ id: knobCount.value, name: '', value: 0 }]
    }
    console.log(pedals.value)
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
  <form @submit.prevent="addPedal">
    <div class="singleInput">
        <h2>Name</h2>
        <input v-model="pedalName" placeholder="name your pedal">
    </div>
    <div class="singleInput">
        <h2>Brand</h2>
        <input v-model="pedalBrand" placeholder="pedal's brand">
    </div>
    <div class="singleInput">
        <h2>Knobs</h2>
        <button @click="addKnob" type="button">+</button>
    </div>
    <div class="singleInput" v-for="knob in pedalKnobs" :key="knob.id">
        <input v-model="knob.name" placeholder="knob name here">
        <button @click="" type="button">x</button>
    </div>
    <button>create pedal</button>
  </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 40%;
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