<template>
  <div  id="app" style="margin: 0; padding: 0;" >
      <navbar />
   
    <router-view></router-view>
  </div>
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
body{
  margin:0%; 
    padding-right: 0px !important;
    overflow: auto  !important;
    overflow-x:hidden !important;
}
</style>
