<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { type Pedal } from '../models/pedal'
import  PedalList from './PedalList.vue'
import PedalForm from './PedalForm.vue'

const pedals: Ref<Pedal[]> = ref([])
const pedalCount = ref(0);

const addPedal = (newPedal: Pedal) => {
    pedals.value.push(newPedal);
};

const updatePedal = (updatedPedal: Pedal) => {
    pedals.value = pedals.value.map((pedal) => {
        if (pedal.id == updatedPedal.id) {
            console.log("updating pedal");
            return updatedPedal
        }
        return pedal
    })
}
</script>

<template>
  <div>
    <PedalForm :pedal="{ id: pedalCount, name: '', brand: '', knobs: [] }" :isEditing="false" :onComplete="addPedal"/>
  </div>
  <PedalList :pedals="pedals" :onUpdate="updatePedal"/>
</template>

<style>
</style>