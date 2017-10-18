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
      
      <router-link class="btn" :to="{ name: 'new-user' }"><b>Add User</b></router-link>
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
  margin-bottom: 1.5rem;
}
.user-list__names li a{
  width: 100%;
  display: block;
  padding: 1rem 0 1rem;
  border-bottom: 1px solid; 
  color: #052d2d;
  font-weight: 500;
  text-decoration: none;
}
.user-list__names li a:hover{
  background-color: #052d2d;
  color: #008b8b; 
}
</style>
