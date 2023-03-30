<template>
  <div id="app">
    <MyComponent />
    <Counter />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'
import Counter from './components/Counter'

export default {
  name: 'App',
  components: {
    MyComponent,
    Counter
  }
}

</script>
