<template>
    <div id="app">
        <div class="pages" v-cloak>
            <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
                <router-view class="view"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              msg:'hello'
          }
        },
          beforeMount(){
            require('../public/jroll');
            require("babel-polyfill");
        },
        mounted() {
            console.log('app.vue');
            
            var height = document.body.clientHeight - (lib.flexible.dpr * 100);
            var mainElm = document.querySelector('.main');
            mainElm.style.height = height + 'px';
            // alert('clientHeight:'+document.body.clientHeight);
            // alert('window.screen:'+window.screen.height + '; '+ window.screen.availHeight);
            // window.addEventListener('reszie',function(){
            //     alert(document.body.clientHeight);
            // });

            // window.addEventListener('orientationchange',function(){
            //     alert(document.body.clientHeight);
            // });
        },
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
    /*[v-cloak] { display: none }*/
</style>