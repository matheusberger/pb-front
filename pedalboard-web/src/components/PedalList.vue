<script setup lang="ts">
import { ref } from 'vue'
import type { Prop, Ref } from 'vue'
import { type Pedal } from '../models/pedal'
import { type Knob } from '../models/knob'

interface Props {
    pedals: Pedal[]
}

const props = defineProps<Props>()

</script>

<template>
  <h2>Pedals</h2>
  <li v-for="pedal in pedals">
    <div class="pedal">
      <h3>{{ pedal.name }}</h3>
      <li class="knobs" v-for="knob in pedal.knobs">
        - {{ knob.name }}
      </li>
      <h3>{{ pedal.brand }}</h3>
    </div>
  </li>
</template>

<style>
li {
    list-style-type: none;
}

.pedal {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.knobs {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
}
</style>