<template>
  <b-navbar type="dark" class="navbars" :class="{navbarsBar:status}">
    <b-navbar-brand href="#" to="/" :class="{navbarsBars:status}" class="nav-text" >BOOKING ROOM</b-navbar-brand>
        

  </b-navbar>
</template>

<script>
export default {
   props: {
        status  //定义传值的类型<br>    }
},
mounted(){
  console.log(this.status);
}
};
</script>

<style>
.navbars {
  position: fixed !important;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(#343a40, transparent) !important;
  padding: 1rem 1rem !important;
  transition: all 0.5s;
  
}
.navbarsBar{
  background-color: #343a40 !important;
  
}
.navbarsBars{
 
  
}
.nav-text{

font-weight:700;
transition:all 0.5s ease-out;

}
.nav-text:hover{
color:rgba(255, 255, 255)!important ;
}
</style>