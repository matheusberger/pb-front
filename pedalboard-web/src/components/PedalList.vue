<script setup lang="ts">
import { ref } from 'vue'
import { type Pedal } from '../models/pedal'
import PedalItem from './PedalItem.vue';

interface Props {
    pedals: Pedal[]
    onUpdate: (pedal: Pedal) => void
}

const props = defineProps<Props>();

const handleEdit = (updatedPedal: Pedal): void => {
  props.onUpdate(updatedPedal);
};

</script>

<template>
    <h2>Pedals</h2>
    <li v-for="pedal in props.pedals" :key="pedal.id">
      <PedalItem :pedal="pedal" :onEdit="handleEdit"/>
    </li>
</template>

<style>
li {
    list-style-type: none;
}
</style>