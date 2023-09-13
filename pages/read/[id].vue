<template>
    <div>
        <ReadTopNav />
        <ReadSideBar />
        <ReadContent />
        <ReadBottomNav />
    </div>
</template>

<script setup lang="ts">
const readNovelData = await useFetch("/api/readNovelData").data;
</script>