<template>
    <div class="container">
        <default-header></default-header>
        <div class="main">
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
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
    import Header from '../components/header.vue';
    import Tabbar from '../components/tabbar.vue';
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
        beforeMount: function () {
            // console.log(this);
            // if(this.pageInit) return;
            // return this.$store.dispatch('fetch');
        },
        methods: {

        },
        components: {
            'default-header': Header,
            'tabbar':Tabbar
        },
    }

</script>