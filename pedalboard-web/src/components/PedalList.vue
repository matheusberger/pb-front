<script setup lang="ts">
import { ref } from 'vue'
import { type Pedal } from '../models/pedal'
import PedalItem from './PedalItem.vue';

interface Props {
    pedals: Pedal[]
}

const props = defineProps<Props>();
const pedals = ref(props.pedals);

const handleEdit = (updatedPedal: Pedal): void => {
  pedals.value = pedals.value.map((pedal) => {
    if (pedal.id == updatedPedal.id) {
      return updatedPedal
    }
    return pedal
  })
};

</script>

<template>
    <h2>Pedals</h2>
    <li v-for="pedal in pedals">
      <PedalItem :pedal="pedal" :onEdit="handleEdit(pedal)" />
    </li>
</template>

<style>
li {
    list-style-type: none;
}
</style>