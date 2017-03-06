<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
        <li><router-link :to="{ name: 'second' }">second</router-link></li>
        <li><router-link :to="{ name: 'counter' }">counter</router-link></li>
        <li><router-link :to="{ name: 'func' }">func</router-link></li>
        <li><router-link :to="{ name: 'parent' }">parent</router-link></li>
        <li><router-link :to="{ name: 'user' }">user</router-link></li>
    </ul>
    <div class="pages">
    <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
        <router-view class="view"></router-view>
    </transition> 
    </div>  
  </div>
</template>

<script>
    
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
  
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    h1,
    h2 {
        font-weight: normal;
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
    
    .pages {
        position: relative;
        width: 10rem;
    }
    
    .pages>div {
        position: absolute;
        top: 0;
        width: 100%;
    }
</style>