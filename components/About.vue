<!-- ComponentB.vue -->
<template>
  <div>
    <h2>Data di ComponentB</h2>
    <p>{{ receivedData }}</p>
  </div>
</template>

<script setup>
const { receivedData } = props;
</script>
