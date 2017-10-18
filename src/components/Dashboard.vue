<template>
  <div class="host">
    <div class="main-content">
      <h2 class="app-title">Temper</h2>
      <p class="call-to-action"><b>Assign a user to a shift</b></p>
      <router-link class="btn" :to="{ name: 'users'}"><b>Link User</b></router-link>
    </div>  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style>
.host{
  box-sizing: border-box;
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.main-content{
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.app-title{
  color: #5bbf89;
  margin-top: 1rem;
}
.call-to-action{
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}

/*---Global styles for the panel----*/
.panel{
  background-color: rgba(2, 21, 21, 0.79);
  -webkit-box-shadow: 1px 1px 1px #ccc;
  box-shadow: 1px 1px 1px #ccc;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  padding-left: 70%;
}
@media screen and (max-width: 560px){
  .panel{
    padding-left: 0%;  
  }
}
.panel-header{
  text-align: center;
  padding: 0.4rem 0.4rem 0.4rem 0;
  background-color: #b2d6d6;
}
.panel-header__icon{
  position: absolute;
  background-color: #0b1e23;
  display: block;
  color: #5bbf88;
  font-size: 0.9rem;
  padding: 0.5rem 0.9rem;
  top: 0px;
}
.panel-content{
  height: 100%;
  background-color: darkcyan;
}

/*----Global styles for the button---*/
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
