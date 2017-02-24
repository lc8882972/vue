<template>
    <div>
        <p>{{name}}</p>
        <button @click="target()">Bus</button>
    </div>
</template>

<script>
import Bus from '../bus';
export default {
  props:["name"],
  methods:{
       target:function(){
         Bus.$emit('test', 'from child.vue');
       }
   }
}
</script>
