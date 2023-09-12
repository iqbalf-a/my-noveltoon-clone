<template>
    <div>
        <ReadTopNav />
        <ReadContent />
        <ReadBottomNav />
    </div>
</template>

<script setup lang="ts">
const readNovelData = await useFetch("/api/readNovelData").data;
</script>