<template >
  <b-container fluid style="padding: 0px !important;" @touchmove="boxin($event)" @mousewheel="boxin($event)">
    <section >
      <div class="bgimg">
        <div class="box1">
          <div class="title">
            <h1>BooKing Room</h1>
          </div>
          <div style="display: flex">
            <div class="title-text">
              
                <b-icon icon="instagram" style="margin-right: 15px"></b-icon>
              
              <br>
                <b-icon icon="facebook" style="margin-right: 15px"></b-icon>
              
            </div>
            <div style="border-left-style: solid; padding-left: 1rem;    white-space: nowrap;">
              <p class="h6 mb-2">
                <b-icon
                  icon="telephone-fill"
                  style="margin-right: 15px"
                ></b-icon
                >0987 654 321
              </p>
              <p class="h6 mb-2">
                <b-icon icon="mailbox2" style="margin-right: 15px"></b-icon
                >BookingRoom@gmail.com
              </p>
              <p class="h6 mb-2">
                <b-icon
                  icon="house-door-fill"
                  style="margin-right: 15px"
                ></b-icon
                >台中市北區三民路一段5號
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="box2">
        <b-row style="padding: 2rem">
          <b-col xl="4" lg="6" md="6" sm="6" class="updatas" :class="{updata:values, updataes:values}" v-for="(item, index) in items" :key="index">
            <div class="img-w">
            <div :id="item.name" class="img-item">
              <router-link class="img-items" :to="({ name: 'roominfo', params: { userId: item.id }})"
                ><b-img
                  class="img-top"
                  rounded
                  :src="item.imageUrl"
                  alt="Image 1"
                  sr
                ></b-img
              ></router-link>
            </div>
            <div class="room-text">
              <h4>{{ item.name }}</h4>
              <span>
                NT.{{ item.normalDayPrice }} / 平日 &emsp;&emsp; NT.{{
                  item.holidayPrice
                }}
                / 假日</span
              >
            </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      values:false,
    };
  },
  created: async function () {
    await axios
      .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
        headers: {
          Accept: "application/json",
          Authorization: ` Bearer oIDqbj3wTwFbRO2o2SMogmx04zQkEcVpJi2szokjad3sPNg9WXaoaXGJOGsm`,
        },
      })
      .then((response) => {
        for (let i = 0; i < response.data.items.length; i++) {
          this.items.push(response.data.items[i]);
        }
        console.log(this.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {
    
    this.boxin()
  },
  methods:{
    boxin(){
      // console.log(window.scrollY);
      if (window.scrollY >= 100) {
        this.values = true;
      }
    }
  },
  watch:{
    value(){
      console.log(this.values);
    }
  }
};
</script>

<style>
.bgimg {
  background-image: url("https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 100%;
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.1);

  height: 80vh;
  max-height: 100%;
}
.box1 {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100vh !important;
}
.title {
  background-color: aliceblue;
  padding: 4vw 6vh 4vw 6vh;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.6);
}
.title h1 {
  color: darkslategrey;
  font-weight: 800;
}
.box1 div {
  color: white;
  margin-top: 3vh;
}
.box1 p {
  margin-right: 10px;
  font-weight: 600;
}
.box2 {
  width: 100%;
  background-color: aliceblue;
}
.img-top {
  height: 25rem;
  object-fit: cover;
  width: 100%;
     z-index: 10;
  transition: all 0.5s ease-out;
  
}
.img-top:hover {
  transform: scale(1.1, 1.1);
  opacity: 0.5;
  z-index: 10;

}
.room-text {
  margin: 20px 0px 20px 0px;
  text-align: right;
}
.room-text h4 {
  margin-right: 10px;
}
.room-text span {
  margin-right: 10px;
}
.img-item {
  overflow: hidden;
  box-shadow: 0px 0px 6px -0.4px;
  z-index: 10;
  background-color: rgba(56, 71, 11);
  
}


.img-items::before {
  content: "more";
  position: absolute;
  top: 0%;
  left: 50%;
  height: 0;
  transform: translate(-50%);
  transition:all 0.5s ease-out;
  color: #fff;
  font-size: 1.625rem;
  opacity: 0;
  font-weight: 600;
}
.img-items:hover::before {
  content: "more";
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
@keyframes abc{
 0% {
    opacity: 0;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
}
100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
}
}
.updata{
  animation: abc 1s ;
}
.updatas{
  /* display: none; */
  opacity: 0;
}
.updataes{
   /* display: block; */
  opacity: 1  !important;
}
.title-text{
padding: 1rem 0.5rem 0 3rem;
}
@media screen and (min-width:1440px){ 
 .img-w {
  width: 400px;
  margin: auto;
}

}
@media screen and (max-width:768px){ 
 .img-top {
  height: 20rem;
  object-fit: cover;
  width: 100%;
    opacity: 1;
  transition: all 0.5s ease-out;  
}

}
@media screen and (max-width:480px){ 
 .img-top {
  height: 17rem;
  object-fit: cover;
  width: 100%;
    opacity: 1;
  transition: all 0.5s ease-out;
}
.img-fluid {
    max-width: 100%; 
     height: 100% !important;
}
.title-text{
padding: 1rem 0.5rem;
}
}
</style>