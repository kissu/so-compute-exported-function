<template>
  <div>
    <div :class="getStatusColour(order.status)">
      This div do have the correct: `bg-green-100 text-green-900` on it
    </div>
  </div>
</template>

<script>
import { getStatusColour } from './utils/test'

export default {
  data() {
    return {
      order: {
        status: 'new',
      },
    }
  },
  methods: {
    getStatusColour,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
