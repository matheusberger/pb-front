<script setup lang="ts">
import { ref } from 'vue'
import { type Pedal } from '../models/pedal'
import PedalItem from './PedalItem.vue';

interface Props {
    pedals: Pedal[]
    onUpdate: (pedal: Pedal) => void
}

const props = defineProps<Props>();
const pedals = ref(props.pedals);

const handleEdit = (updatedPedal: Pedal): void => {
  props.onUpdate(updatedPedal);
};

</script>

<template>
    <h2>Pedals</h2>
    <li v-for="pedal in pedals">
      <PedalItem :pedal="pedal" :onEdit="handleEdit" :key="pedal.id"/>
    </li>
</template>

<style>
li {
    list-style-type: none;
}
</style>