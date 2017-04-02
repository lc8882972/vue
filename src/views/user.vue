<template>
  <div class="container">
    <!--<default-header></default-header>-->
    <div class="main">

      <tabs>
        <tab-body>
          <tab-item>
          <div>
            <router-link :to="{ name: 'project'}">project.vuefdsfd </router-link>
          </div>
          <div>
            <form>
              <input type="text" name='name'/>
            </form>
          </div>
          <div class="blogo">
          
          </div>
        </tab-item>
        <tab-item>2</tab-item>
        <tab-item>3</tab-item>
        <tab-item>4</tab-item>
        </tab-body>
        <tab-footer>
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
        </tab-footer>
        <!--<tabbar></tabbar>-->
      </tabs>
    </div>

  </div>

</template>
<script>
  import Header from '../components/header.vue';
  import Tabbar from '../components/tabbar.vue';
  import Tabs from '../modules/tabs/tabs.vue';
  import TabItem from '../modules/tabs/item.vue';
  import TabBody from '../modules/tabs/body.vue';
  import TabFooter from '../modules/tabs/tabbar.vue';
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
      'tab-item': TabItem,
      'tab-body':TabBody,
      'tab-footer' :TabFooter
    },
  }
</script>

<style>
  .blogo{
    width:200px;
    height:200px;
    background:url('../assets/logo.png');
    background-size:cover    
  }
</style>
