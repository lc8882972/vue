<template>
    <div>
        <p>{{msg}}</p>
        <abc name="abc"><abc>
    </div>
</template>

<script>
import child from './Child.vue'
export default {
  data(){
    return {
      msg:'爸爸组件'
    }
  },
   components: {
      abc:child
   }
}
</script>

<style>

</style>