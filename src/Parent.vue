<template>
    <div>
        <p>{{msg}}</p>
        <abc name="abc"><abc>
    </div>
</template>

<script>
import child from './Child.vue';
import Bus from './bus';
export default {
  data(){
    return {
      msg:'爸爸组件'
    }
  },
   components: {
      abc:child
   },
   methods:{
   },
   mounted:function(){
     Bus.$on('test',msg=>{
       console.log(msg);
     })
   }
}
</script>

<style>

</style>