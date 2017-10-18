<template>
  <div class="panel">
    <div class="panel-content">
      <header class="panel-header">
        <b class="panel-header__icon" @click="closeNav()">X</b>
        <h4>Choose a user</h4>
      </header>
      <ul class="user-list__names">
        <li><router-link :to="{ name: 'user', params: { name: 'Jane' }}">Jane</router-link></li>
        <li><router-link :to="{ name: 'user', params: { name: 'James' }}">James</router-link></li>
        <li><router-link :to="{ name: 'user', params: { name: 'John' }}">John</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  methods: {
    closeNav() {
      this.$router.push({ name: 'dashboard' });
    },
  },
};
</script>

<style scoped>
.user-list__names{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.user-list__names li{
  padding: 1rem 0;
}
.user-list__names li a{
 color: #5bbf89; 
}
</style>
