<template>
  <div class="container">
    <!--<default-header></default-header>-->
    <div class="main">

      <tabs>
        <tab-item>
                <span>{{user.age}}</li></span>
      <span>{{sex}}</li></span>

      <div>
        <router-link :to="{ name: 'project'}">project.vue </router-link>
      </div>
      <div>
          <form>
            <input type="text" name='name'/>
          </form>
      </div>
        </tab-item>
        <tab-item>2</tab-item>
        <tab-item>3</tab-item>
      </tabs>
    </div>
  <!--<tabbar></tabbar>-->
  </div>
</template>
<script>
  import Header from '../components/header.vue';
  import Tabbar from '../components/tabbar.vue';
  import Tabs from '../modules/tabs/tabs.vue';
  import TabItem from '../modules/tabs/item.vue';

  //TODO 定义heaer,footer组件，引入scss,定义全局样式
  export default {
    data() {
      return {
        name: 'XXX',
        user: {
          age: 18
        },
        sex: null
      }
    },
    created() {
      // this.axios.get('http://localhost:5000/api/values').then((response) => {
      //     console.log(response.data);
      //     this.name = response.data.name;
      // })
    },
    // preFetch(store){
    //       return Promise.all([
    //           store.dispatch('fetch')
    //       ])
    // },
    beforeMount: function() {
      // console.log(this);
      // if(this.pageInit) return;
      // return this.$store.dispatch('fetch');
    },
    methods: {

    },
    components: {
      'default-header': Header,
      'tabbar': Tabbar,
      'tabs': Tabs,
      'tab-item': TabItem
    },
  }
</script>

<style>
  html,
  body,
  section {
    height: 100%;
  }

  a {
    color: #fff;
    font-size: 36px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input {
    border: none;
    outline: none
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix {
    content: "";
    clear: both;
    display: inline-block;
  }

  .head {
    width: 100%;
    height: 80px;
    line-height: 80px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ff6634;
    color: #fff;
    font-size: 40px;
  }

  .left {
    width: 35px;
    height: 42px;
    position: absolute;
    top: 25px;
    left: 20px;
    /*background: url(img/loginRegister/return.png) no-repeat;*/
  }

  .text {
    width: 55%;
    display: inline-block;
    text-align: right;
  }

  .section {
    width: 92%;
    padding: 70px 4% 0 4%;
    background-color: #efeef4;
  }

  .section .ul {
    width: 100%;
  }

  .section .ul li {
    width: 100%;
    height: 90px;
    line-height: 90px;
    font-size: 32px;
    color: #9b9b9b;
    background-color: #fff;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
  }

  .section .ul input {
    width: 85%;
    height: 90px;
    line-height: 90px;
    border: none;
    font-size: 32px;
    padding-left: 15%;
    outline: none;
  }

  .subbutton {
    width: 100%;
    height: 82px;
    line-height: 83px;
    border-radius: 4px;
    background-color: #ff6634;
    text-align: center;
    font-size: 32px;
    color: #fff;
    margin-top: 58px;
  }

  .tel {
    width: 60%;
    line-height: 4.3rem;
    border: 0.05rem solid #e7e7e7;
    padding-left: 14.2%;
  }

  .send {
    width: 23.5%;
    line-height: 4.3rem;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1.5rem;
  }

  .mark {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    background: rgba(0, 0, 0, 0.85);
    display: none;
  }

  .success {
    margin: 40% 15%;
  }

  .hide {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
    font-size: 32px;
  }

  .box {
    width: 70%;
    height: 9%;
    margin: auto;
    position: absolute;
    top: 31%;
    left: 15%;
    display: none;
  }

  .mask {
    width: 100%;
    height: 100%;
    line-height: 118px;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #fff;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.8);
  }
</style>
