<template>
    <div id="app">
        <div class="pages">
            <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
                <router-view class="view"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    require('jroll');
    require('../public/jroll-vue-infinite');
    export default {
        data() {
          return {
              msg:'hello'
          }
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 10rem;
        height: 100%;
    }
    

    .pages {
        position: relative;
        width: 10rem;
        height: 100%;
    }
    
</style>