<template>
<b-container fluid class="bv-example-row" style="padding: 0px">
  <div  id="app" style="margin: 0; padding: 0;"  @touchmove="boxin($event)" @mousewheel="boxin($event)" >
      <navbar :status="values" />
   
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
  data(){
    return{
      values:false,
    }
  },
   mounted() {
    
    this.boxin()
  },
  methods:{
    boxin(){
      console.log(window.scrollY);
      if (window.scrollY >= 80) {
        this.values = true;
        console.log(123);
      }else if(window.scrollY >= 80 || window.scrollY <= 200){
        this.values = false;
      }
    },
     
  },
};
</script>

<style>
#app{
  margin:0;
  padding-right:0;
 
}
.row{
  margin-right: 0px !important; 
    margin-left: 0px!important;
}


</style>
