<template>
  <div id="app">
    <!-- <MyComponent /> -->
    <!-- <MyCounter /> -->
    <!-- <UserCard /> -->
    <!-- <UserSearch /> -->
    <!-- <PhotoRedactor /> -->
    <div class="conatiner">
      <ProductList />
    </div>
  </div>
</template>

<script>
// import MyComponent from './components/MyComponent'
// import MyCounter from './components/MyCounter'
// import UserCard from './components/UserCard'
// import UserSearch from './components/UserSearch'
// import PhotoRedactor from './components/PhotoRedactor'
import ProductList from './components/ProductList'

export default {
  name: 'App',
  components: {
    // MyComponent,
    // MyCounter,
    // UserCard,
    // UserSearch
    // PhotoRedactor
    ProductList
  }
}

</script>
