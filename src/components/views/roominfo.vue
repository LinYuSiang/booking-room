<template>
  <b-container fluid style="padding: 0px !important">
    <section>
      <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000; height: 30rem; width: 100%"
          fade
          controls
          indicators
          img-width="1024px"
        >
          <b-carousel-slide
            :key="index"
            v-for="(item, index) in list.imageUrl"
            style="height: 30rem"
            :caption="list.name"
            :img-src="item"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </section>
    <section>
      <div class="box2" v-if="fender">
        <b-row style="padding: 2em">
          <b-col xl="7" lg="7" md="7" sm="12" class="color" style="padding: 2em">
            <h3>{{ list.name }}</h3>
          </b-col>
          <b-col xl="5" lg="5" md="5" sm="12" class="color" style="padding: 2em">
            <h5>平日(一 ~ 四) / NT.{{ list.normalDayPrice }}</h5>
            <br />
            <h6>假日(五 ~ 日) / NT.{{ list.holidayPrice }}</h6>
          </b-col>
          <b-col  xl="7" lg="7" md="7" sm="12" class="color" style=" padding: 2em">
            
            <br />
            <ol>
              <li>
                房客人數限制： {{ list.descriptionShort.GuestMin }} ~
                {{ list.descriptionShort.GuestMax }}
              </li>
              <br />
              <li>
                床型： {{ list.descriptionShort.Bed[0] }} /
                {{ list.descriptionShort.Bed.length }}張
              </li>
              <br />
              <li>衛浴數量： 1 間</li>
              <br />
              <li>房間大小： {{ list.descriptionShort.Footage }} 平方公尺</li>
              <br />
              <li>
                房間介紹：<br /><br />
                {{ list.description }}
              </li>
            </ol>
            <b-row style="text-align: center">
              <b-col cols="6" class="color">
                <h4>Check in</h4>
                {{ list.checkInAndOut.checkInEarly }} ~
                {{ list.checkInAndOut.checkInLate }}
              </b-col>
              <b-col cols="6" class="color">
                <h4>Check out</h4>
                {{ list.checkInAndOut.checkOut }}
              </b-col>
            </b-row>
          </b-col>
          <b-col
             xl="5" lg="5" md="5" sm="12"
            class="color"
            style="text-align: right; padding: 2em"
          >
            
            <b-row class="icon">
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"        
                class="color"
                :class="{ icont: status[11] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'wifi']" size="2x" />
                <h6>Wi-Fi</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[10] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'phone']" size="2x" />
                <h6>電話</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[3] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'mountain']" size="2x" />
                <h6>風景</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[1] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'bacon']" size="2x" />
                <h6>早餐</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[0] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'wind']" size="2x" />
                <h6>冷氣</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[8] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'smoking-ban']" size="2x" />
                <h6>禁止吸菸</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[4] }"
                style="padding: 20px"
              >
                <font-awesome-icon
                  :icon="['fa', 'glass-martini-alt']"
                  size="2x"
                />
                <h6>酒吧</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[6] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'asterisk']" size="2x" />
                <h6>冰箱</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[2] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'child']" size="2x" />
                <h6>兒童</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[7] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'concierge-bell']" size="2x" />
                <h6>客房服務</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[9] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'couch']" size="2x" />
                <h6>沙發</h6>
              </b-col>
              <b-col
                xl="3"
                lg="4"
                md="6"
                sm="2"
                cols="6"
                class="color"
                :class="{ icont: status[5] }"
                style="padding: 20px"
              >
                <font-awesome-icon :icon="['fa', 'dog']" size="2x" />
                <h6>寵物</h6>
              </b-col>
            </b-row>
            <date-picker
              class="datepicker"
              placeholder="選擇訂房日期"
              value-type="YYYY-MM-DD"
              format="YYYY-MM-DD"
              range
              v-model="value1"
              :default-value="new Date()"
              :disabled-date="disabledBeforeTodayAndAfterAWeek"
            >
              <template v-slot:footer="{ emit }">
                <div style="text-align: left">
                  <button
                    class="mx-btn mx-btn-text"
                    @click="selectNextThreeDay(emit)"
                  >
                    enter
                  </button>
                </div>
              </template></date-picker
            >
          </b-col>
          <b-col xl="4" lg="4" md="4" class="color"></b-col>
          <b-col xl="4" lg="4" md="4" class="color" style="text-align: center">
            <b-button class="mobal" size="lg" @click="modal">我要訂房</b-button>
          </b-col>
          <b-col xl="4" lg="4" md="4" class="color" style="text-align:right;padding: 25px;">
              <b-button class="mobal" size="sm" @click="modal2">取消所有訂房</b-button>
          </b-col>
        </b-row>
      </div>
    </section>
    <section>
      <div ></div>
    </section>

    <b-modal size="xl" centered hide-footer v-if="modalShow" v-model="modalShow" title="Booking Room">
      <div >
        <b-container fluid>
          <b-row>
            <b-col xl="5" lg="5" md="5" sm="12" class="mobal-text">
              <form ref="form" style="color: white; font-size: 12px">
                <b-form-group label="姓名：">
                  <b-form-input
                    size="sm"
                    id="name-input"
                    v-model="name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="電話號碼：">
                  <b-form-input
                    size="sm"
                    id="name-input"
                    v-model="phoneNumber"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="訂房日期：">
                  <b-form-input
                    disabled
                    size="sm"
                    id="name-input"
                    v-model="startDay"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="退房日期：">
                  <b-form-input
                    disabled
                    size="sm"
                    id="name-input"
                    v-model="endDay"
                    required
                  ></b-form-input>
                </b-form-group>
                <div
                  style="
                    text-align: end;
                    border-top-style: solid;
                    border-top-width: 1px;
                    padding: 7px;
                  "
                >
                  <h6>{{ dateAll.length }} / 天</h6>
                  <h6>總計：</h6>
                  <h3>$ {{ price }}</h3>
                </div>
              </form>
            </b-col>
            <b-col xl="7" lg="7" md="7" sm="12" style="color:rgba(56, 71, 11);">
              <div
                style="
                  padding: 15px;
                  border-bottom-style: solid;
                  border-bottom-width: 1px;
                "
              >
                <h4>{{ list.name }}</h4>
              </div>
              <div
                style="
                  padding: 15px;
                  border-bottom-style: solid;
                  border-bottom-width: 1px;
                  font-size:14px
                "
              >
                <span>{{ list.descriptionShort.GuestMin }} ~ {{ list.descriptionShort.GuestMax }}人 / 1房. 衛浴設備1間. 平數{{ list.descriptionShort.Footage }} 平方公尺</span>
                <br />
                <span>平日(一 ~ 四)  價格：{{ list.normalDayPrice }} ／ 假日(五 ~ 日)  價格：{{ list.holidayPrice }}</span>
              </div>
              <div
                style="
                  padding: 15px;
                  border-bottom-style: solid;
                  border-bottom-width: 1px;
                  
                "
              >
                <h4 style="font-weight:800">客房資訊</h4>
              </div>
              <div
                style="
                  padding: 15px;
                  border-bottom-style: solid;
                  border-bottom-width: 1px;
                  font-size:14px
                "
              >
                <ul>
                    <li>
                        <span>入住時間：最早{{ list.checkInAndOut.checkInEarly }}，最晚{{ list.checkInAndOut.checkInLate }}；退房時間：{{ list.checkInAndOut.checkOut }}，請自行確認行程安排。</span>
                    </li>
                    <li>
                        <span>平日定義週一至週四；假日定義週五至週日</span>
                    </li>
                    <li>
                        <span>旅店全面禁止吸菸。</span>
                    </li>
                </ul>
              </div>
              <div class="artis">
                  <b-button  style="font-weight:800" @click="room" size="lg">確認訂房</b-button>
              </div>
              
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal >

    <b-modal centered ok-only  v-model="modalShow2" title="Booking" >
        <h3>恭喜您訂房已成功</h3>
    </b-modal>

    <b-modal centered ok-only v-model="modalShow3" title="Booking" >
        <h3>已取消所有訂房</h3>
    </b-modal>
  </b-container>
</template>


<script>
import axios from "axios";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      msg: localStorage.getItem("id"),
      list: [],
      fender: false,
      status: [
        { wind: false },
        { breakfast: false },
        { child: false },
        { view: false },
        { miniBar: false },
        { pet: false },
        { refrigerator: false },
        { roomService: false },
        { smoke: false },
        { sofa: false },
        { TV: false },
        { wifi: false },
      ],
      modalShow: false,
      name: "",
      value1: new Date(),
      dateAll: [],
      price: 0,
      startDay: "",
      endDay: "",
      phoneNumber: "",
      modalShow2: false,
      modalShow3: false,
    };
  },
  beforeCreate: function () {
    if (this.$route.params.userId !== undefined) {
      localStorage.setItem("id", this.$route.params.userId);
    }
    console.log(this.msg);
  },
  created: function () {
    axios
      .get(
        `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.msg}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: ` Bearer oIDqbj3wTwFbRO2o2SMogmx04zQkEcVpJi2szokjad3sPNg9WXaoaXGJOGsm`,
          },
        }
      )
      .then((response) => {
        this.list = response.data.room[0];
        var i = 0;
        for (var item in this.list.amenities) {
          this.status[i] = this.list.amenities[item];
          i++;
        }
        for (let j = 0; j < this.status.length; j++) {
          this.status[j] = !this.status[j];
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updated() {
    this.fender = true; //避免畫面選染不正確
  },
  methods: {
    disabledBeforeTodayAndAfterAWeek: function (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return (
        date < today || date > new Date(today.getTime() + 90 * 24 * 3600 * 1000)
      );
    },
    selectNextThreeDay(emit) {
      const start = new Date();
      const end = new Date();
      end.setTime(end.getTime() + 3 * 24 * 3600 * 1000);
      const date = [start, end];
      emit(date);
    },
    modal: function () {
      console.log(123);
      if (this.startDay == "") {
        alert("請輸入訂房日期");
      } else {
        this.modalShow = !this.modalShow;
        console.log(this.value1);
      }
    },
    room:function(){
        axios
      .post(
        `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.msg}`,{
            name : this.name,
            tel : this.phoneNumber,
            date: this.value1
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: ` Bearer oIDqbj3wTwFbRO2o2SMogmx04zQkEcVpJi2szokjad3sPNg9WXaoaXGJOGsm`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success ===true) {
            console.log(123);
            this.modalShow2 = true
        }
      })
      .catch(function (error) {
        console.log(error.response);
       alert(error.response.data.message);
      });
    },
    modal2:function(){
        axios
      .delete("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", 
        {
          headers: {
            Accept: "application/json",
            Authorization: ` Bearer oIDqbj3wTwFbRO2o2SMogmx04zQkEcVpJi2szokjad3sPNg9WXaoaXGJOGsm`,
          },
      })
      .then((response) => {
        console.log(response);
        this.modalShow3 = true
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    value1() {
      console.log(this.value1);
      this.startDay = this.value1[0];
      this.endDay = this.value1[1];
      var date_all = [],
        i = 0;
      function getDate(datestr) {
        var temp = datestr.split("-");
        var date = new Date(temp[0], temp[1] - 1, temp[2]);
        console.log(date);
        return date;
      }
      var start = this.value1[0];
      var end = this.value1[1];
      var startTime = getDate(start);
      var endTime = getDate(end);
      while (endTime.getTime() - startTime.getTime() >= 0) {
        var year = startTime.getFullYear();
        var month =
          (startTime.getMonth() + 1).toString().length == 1
            ? "0" + (startTime.getMonth() + 1).toString()
            : (startTime.getMonth() + 1).toString();
        var day =
          startTime.getDate().toString().length == 1
            ? "0" + startTime.getDate()
            : startTime.getDate();
        date_all[i] = year + "-" + month + "-" + day;
        startTime.setDate(startTime.getDate() + 1);
        i += 1;
      }
      this.dateAll = date_all;
      console.log(this.dateAll);

      //計算平日與假日price
      var workday,
        hd = 0,
        wd = 0;
      for (let i = 0; i < this.dateAll.length; i++) {
        workday = new Date(this.dateAll[i].replace(/-/g, "/"));
        workday = workday.getDay();
        if (workday == 5 || workday == 6 || workday == 0) {
          hd += 1;
        } else {
          wd += 1;
        }
      }
      this.price = wd * this.list.normalDayPrice + hd * this.list.holidayPrice;
      console.log(this.price);
    },
  },
};
</script>
<style >
.img-fluid {
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(56, 71, 11);
  transform: translate(-50%, -50%);
}
.color {
  background-color: white;
  padding: 15px;
  color: rgba(56, 71, 11);
}
.icon {
  font-weight: 800;
  padding: 10px 50px 50px 50px;
  text-align: center;
}
.icont svg {
  opacity: 0.5;
}
.icont h6 {
  opacity: 0.5;
}
.btn-secondary {
  background-color: rgba(56, 71, 11) !important;
}
.mobal {
  font-weight: 800 !important;
}
.mobal-text {
  background-color: rgba(56, 71, 11);
  padding: 15px;
  /* color: rgba(56, 71, 11); */
}
.mx-datepicker-popup {
  top: 1160.59px;
  left: 0px;
  position: absolute;
}
.artis{
padding:15px;
text-align:center;
}
.btn-secondary:hover{
    background-color:  rgb(44, 56, 9) !important;
}
.mx-datepicker-range {
    width: 100% !important;
}
@media screen and (max-width:480px){ 
 
.img-fluid {
    max-width: 100%; 
     height: 100% !important;
}
}
</style>