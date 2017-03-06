<template>
    <div>
        <span>{{$store.state.user.name}}</li></span>
        <span>{{user.age}}</li></span>
         <span>{{sex}}</li></span>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                name: 'XXX',
                user: {
                    age: 18
                },
                sex:undefined
            }
        },
        created() {
            // this.axios.get('http://localhost:5000/api/values').then((response) => {
            //     console.log(response.data);
            //     this.name = response.data.name;
            // })
        },
        preFetch(store){
              return Promise.all([
                  store.dispatch('fetch')
              ])
        },
        beforeMount:function(){
            console.log(this);
            if(this.pageInit) return;
            return this.$store.dispatch('fetch');
        },
        methods: {

        }
    }

</script>

<style </style>