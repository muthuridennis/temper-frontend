<template>
  <div class="panel">
    <div class="panel-content">
      <header class="panel-header">
        <b class="panel-header__icon" @click="goBack()"><</b>
        <h4>Create a user</h4>
      </header>
      <form v-on:submit.prevent="createUser" class="form" action="">
        <div class="form-group">
          <label for="first_name" class="form-control">First Name</label>
          <input v-model="user.firstName" type="text" required="" class="form-control" id="first_name">
        </div>
        <div class="form-group">
          <label for="last_name" class="form-control">Last Name</label>
          <input v-model="user.lastName" type="text" required="" class="form-control" id="last_name">
        </div>
        <button type="submit" class="btn"><b>Create</b></button>
      </form>
    </div>
  </div>
</template>

<script>
/* globals alert */
export default {
  name: 'NewUser',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'users' });
    },
    createUser() {
      const message = `User ${this.user.firstName} ${this.user.lastName} has been created successfully`;
      alert(message);
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>
.form{
  padding: 1rem 4rem; 
  text-align: center;
}
.form-group{
  padding: 0rem 1rem 0px;
  margin-bottom: 1.3rem;
}
.form-control{
  display: block;
}
label.form-control{
  text-align: left;
  margin-bottom: 0.25rem;
  color: #082933;
  font-weight: bold;
  font-size: 0.9rem;
}
input.form-control{
  border: 1px;
  padding: 0.5rem;
  width: 100%;
  font-size: 0.8rem;
}
.btn{
  background-color: #5bbf89;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 1px;
  font-size: 0.85rem;
  color: #181919;
  text-decoration: none;
}
</style>
