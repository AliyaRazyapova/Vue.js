<template>
  <div id="app">
    <MyComponent />
    <MyCounter />
    <UserCard />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'
import MyCounter from './components/MyCounter'
import UserCard from './components/UserCard'

export default {
  name: 'App',
  components: {
    MyComponent,
    MyCounter,
    UserCard,
  }
}

</script>
