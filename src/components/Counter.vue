<template>
  <div>
    <h1>Count: {{ counterStore.count }}</h1>
    <h2>Double Count: {{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '../stores/counter';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
});
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>