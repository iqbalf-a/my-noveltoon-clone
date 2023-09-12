<template>
  <TheHeader />
  <DetailBreadcrumb />
  <DetailBanner />
  <DetailContent />
  <DetailNavBottom />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "detail",
});
</script>
