<template>
  <div></div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.id); // john
  },
};
</script>

<style lang="scss" scoped></style>
