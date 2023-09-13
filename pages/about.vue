<template>
  <div>
    <About />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.id); // john
  },
};
</script>

<style lang="scss" scoped></style>
