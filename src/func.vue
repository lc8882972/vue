<template>
    <div>
        <p>{{msg}}</p>
        <button @click="bar()">bar()</button>
    </div>
</template>

<script>
export default {
  methods: {
    bar: function () {
      console.log('bar')
    }
  },
  data(){
    return {
      msg:'yAn'
    }
  }
}
</script>

<style>

</style>