<!-- ComponentA.vue -->
<template>
    <div>
      <h2>Data di ComponentA</h2>
      <p>{{ dataProp }}</p>
    </div>
  </template>
  
  <script setup>
  const { dataProp } = props;
  </script>
  