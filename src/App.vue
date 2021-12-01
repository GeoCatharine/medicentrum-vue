<template>
  <div>
    <TopNav v-show="!checkWindow"/>
    <BurgerNav v-show="checkWindow"/>
    <router-view />
    <Footer v-show="!checkWindow"/>
    <BurgerFooter v-show="checkWindow"/>
  </div>
</template>
<script>

import Footer from './components/Footer'
import TopNav from './components/TopNav'
import BurgerNav from './components/BurgerNav'
import BurgerFooter from './components/BurgerFooter'

export default {
  data () {
    return {
      windowWidth: window.innerWidth,
      small: 950
    }
  },
  components: {
    Footer,
    TopNav,
    BurgerNav,
    BurgerFooter
  },
  computed: {
    checkWindow () {
      return this.windowWidth <= this.small
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: #7D7987;
  overflow: hidden;
}

body {
  margin: 0;
}

</style>
