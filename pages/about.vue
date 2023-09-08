<script setup lang="ts">
const { data } = await useFetch('/api/novelsData')
</script>

<template>
  <pre>{{ data }}</pre>
</template>
