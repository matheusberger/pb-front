<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { type Pedal } from '../models/pedal'
import { type Knob } from '../models/knob'

const pedals: Ref<Pedal[]> = ref([])

const pedalName = ref('')
const pedalBrand = ref('')
const pedalKnobs = ref([])

const addPedal = () => {
    if (pedalName.value != '' && pedalBrand.value != '') {
        pedals.value.push({ name: pedalName.value, brand: pedalBrand.value, knobs: pedalKnobs.value })

        pedalName.value = ''
        pedalBrand.value = ''
        pedalKnobs.value = []
    }
    console.log(pedals.value)
}
</script>

<template>
  <form @submit.prevent="addPedal">
    <input type="text" v-model="pedalName" placeholder="name your pedal">
    <input type="text" v-model="pedalBrand" placeholder="pedal's brand">
    <button>create pedal</button>
  </form>
</template>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 40%;
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