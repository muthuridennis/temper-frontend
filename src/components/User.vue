<template>
  <div class="panel">
    <div class="panel-content">
      <header class="panel-header">
        <b class="panel-header__icon" @click="goBack()"><</b>
        <h4>Assign shift</h4>
      </header>
      <h3 class="name">{{ $route.params.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    goBack() {
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>
.name{
  color: #5bbf89;
  margin: 0px;
  padding-top: 1rem;
}
</style>
