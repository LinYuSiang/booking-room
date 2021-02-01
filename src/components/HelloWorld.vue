<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'roomid'
  ],
  data(){
    return{
      msg:localStorage.getItem("id"),
    }
  },
  mounted(){
    if (this.$route.params.userId !==undefined) {
       localStorage.setItem('id',this.$route.params.userId );
      
    }
    console.log( this.$route.params.userId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
