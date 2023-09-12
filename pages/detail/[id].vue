<template>
  <TheHeader />
  <DetailBreadcrumb />
  <DetailBanner />
  <DetailContent />
  <DetailBottomNav />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "detail",
});
</script>
