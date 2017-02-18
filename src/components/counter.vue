<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="add()">Add List</button>
    <ul>
      <li v-for="item in $store.state.list">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'add'
  ])
  // methods:{
  //    add :function(){
  //      this.$store.dispatch('increment')
  //    },
  //    decrement:function(){
  //      this.$store.dispatch('decrement')
  //    }
  // }
}
</script>