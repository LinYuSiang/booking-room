<template>
  <b-navbar type="dark" class="navbars">
    <b-navbar-brand href="#" to="/" class="nav-text">BOOKING ROOM</b-navbar-brand>


  </b-navbar>
</template>

<script>
export default {};
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
}
.nav-text{
color:rgba(56, 71, 11)!important;
font-weight:700;
transition:all 0.5s ease-out;

}
.nav-text:hover{
color:rgba(255, 255, 255)!important;
}
</style>