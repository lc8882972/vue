<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
        <button @click="bar()">bar()</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  },
  methods: {
    bar: function () {
      this.author='jack love'
    }
  },
}
</script>
<style>
     #secondcomponent{
       background: #000;
     }
</style>