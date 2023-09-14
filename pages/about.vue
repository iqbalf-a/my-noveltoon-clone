<!-- MyPage.vue -->
<template>
  <div>
    <h1>My Page</h1>
    <AboutChild :dataProp="dataToSend" />
    <About :receivedData="dataReceived" />
  </div>
</template>

<script setup>

const dataToSend = 'Ini adalah data dari ComponentA';
const dataReceived = ref('');
</script>
