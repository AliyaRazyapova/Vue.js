<template>
    <div class="root">
      <p>
        Выберите кол-во продуктов:
      </p>
      <button
        type="button"
        @click="decreaseCount"
      >
        -
      </button>
        <input
          type="number"
          :value="count"
          :min="minCount"
          :max="maxCount"
        >
      <button
        type="button"
        @click="increaseCount"
      >
        +
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyCounter',
    data() {
      return {
        count: 1,
        maxCount: 10,
        minCount: 1
      }
    },
    methods: {
      increaseCount() {
        if (this.count < this.maxCount) {
          this.count++
        }
      },
      decreaseCount() {
        if (this.count > this.minCount) {
          this.count--
        }
      }
    }
  }
</script>  