<template>
  <div class="panel">
    <div class="panel-content">
      <header class="panel-header">
        <b class="panel-header__icon" @click="goBack()"><</b>
        <h4>Assign shift</h4>
      </header>
      <h3 class="staff-name">{{ $route.params.name }}</h3>
      <button class="btn" @click="displayAlert()"><b>Assign</b></button>
    </div>
  </div>
</template>

<script>
/* globals alert */
export default {
  name: 'User',
  methods: {
    goBack() {
      this.$router.push({ name: 'users' });
    },
    displayAlert() {
      const message = `${this.$route.params.name} has been assigned a shift`;
      alert(message);
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>
.staff-name{
  color: #082933;
  margin: 0px;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
