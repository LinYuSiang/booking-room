<template>
<b-container fluid class="bv-example-row" style="padding: 0px">
  <div  id="app" style="margin: 0; padding: 0;" >
      <navbar />
   
    <router-view></router-view>
  </div>
  </b-container>
</template>

<script src="https://kit.fontawesome.com/23e6cd8242.js" crossorigin="anonymous"></script>
<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app{
  margin:0;
  padding-right:0;
 
}
.row{
  margin-right: 0px; 
    margin-left: 0px;
}


</style>
