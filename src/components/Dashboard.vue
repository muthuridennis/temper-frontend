<template>
  <div class="host">
    <div class="main-content">
      <p class="title">Assign a user to a shift</p>
      <router-link :to="{ name: 'users'}">Link User</router-link>
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
.title{
  padding-top: 1rem;
}

</style>
