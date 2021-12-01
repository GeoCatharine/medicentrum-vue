<template>
  <div id="footer">
    <img src="../assets/img/elementsmall.png" class="background-img">
    <div class="footer-container">
      <div class="footer-info">
        <div class="logo">
          <div class="ball ball-light">M</div>
          <a href="#" class="nav-logo">MediCentrum</a>
        </div>
      </div>
      <div class="footer-nav">
        <div>
          <ul>
            <h3 @click="compareMenu('toggleMenu1')" >Company</h3>
            <div class="box" v-show="toggleMenu1">
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu1 } ">
                <router-link to="/about">About</router-link>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu1 } ">
                <router-link to="/testimonials" >Testimonials</router-link>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu1 } ">
                <router-link to="/find-doctor" >Find a doctor</router-link>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu1 } ">
                  <router-link to="/apps" >Apps</router-link>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <h3 @click="compareMenu('toggleMenu2')" >Region</h3>
            <div class="box" v-show="toggleMenu2">
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu2 } ">
                  <a href="" >Indonesia</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu2 } ">
                  <a href="" >Singapore</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu2 } ">
                  <a href="" >Hongkong</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu2 } ">
                  <a href="" >Canada</a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <h3 @click="compareMenu('toggleMenu3')" >Help</h3>
            <div class="box" v-show="toggleMenu3">
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu3 } ">
                  <a href="" >Help center</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu3 } ">
                  <a href="" >Contact support</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu3 } ">
                  <a href="" >Instructions</a>
              </li>
              <li
                class="link"
                v-bind:class="{ 'animate' : toggleMenu3 } ">
                  <a href="" >How it works</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <p>©MediCentrum PTY LTD 2020. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleMenu1: false,
      toggleMenu2: false,
      toggleMenu3: false,
      windowWidth: window.innerWidth,
      breakpoint: 500
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    areAllMenusClosed () {
      return !this.toggleMenu1 && !this.toggleMenu2 && !this.toggleMenu3
    },
    checkWindow () {
      return this.windowWidth > this.breakpoint
    }
  },
  methods: {
    toggleMenu (menu) {
      this[menu] = !this[menu]
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    },
    toggleMenus (currentMenu) {
      if (this.checkWindow) {
        this.toggleMenu(currentMenu)
        return
      }

      if (currentMenu === 'toggleMenu1') {
        this.toggleMenu1 = !this.toggleMenu1
        this.toggleMenu2 = false
        this.toggleMenu3 = false
      } else if (currentMenu === 'toggleMenu2') {
        this.toggleMenu1 = false
        this.toggleMenu2 = !this.toggleMenu2
        this.toggleMenu3 = false
      } else if (currentMenu === 'toggleMenu3') {
        this.toggleMenu1 = false
        this.toggleMenu2 = false
        this.toggleMenu3 = !this.toggleMenu3
      }
    },
    compareMenu (name) {
      const footer = document.getElementById('footer')
      const windowClass = this.checkWindow ? 'expand' : 'expandColumn'
      footer.classList.add(windowClass)

      this.toggleMenus(name)

      if (this.areAllMenusClosed) {
        footer.classList.remove(windowClass)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#footer {
  background: $background-gradient;
  height: 15rem;
  color: $primary-color;
  position: relative;
  overflow: hidden;

  @include for-tablet-portrait {
    height: 25rem;
  }

  .background-img {
    position: absolute;
    z-index: 2;
    bottom: -4.2rem;
    left: -1.6rem;
  }
}

.expand {
  height: 30rem !important;
}

.expandColumn {
  height: 40rem !important;
}

.footer-container {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  p {
    font-size: size(small-text);
    position: absolute;
    bottom: 2rem;
  }

}

.footer-info {
  width: 100%;
  text-align: center;

  .logo {
    .nav-logo {
      color: $primary-color;
    }
  }
}

.footer-nav {
  display: flex;
  width: 90%;
  align-items: baseline;
  justify-content: space-evenly;
  text-align: center;

  @include for-tablet-landscape {
    width: 90%;
  }

  @include for-tablet-portrait {
    flex-direction: column;
  }

  div {
    width: 30%;

    @include for-tablet-portrait {
      width: 100%;
    }

    .box {
      width: 100%;
    }
  }

  a {
    color: $primary-color;
    font-size: size(medium-text);
    line-height: line(M);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    color: $primary-color;
    margin: 0;
    line-height: line(S);
  }
}

//animation items

$delay: .2s;
$menu-items: 5;

@keyframes drop {
  from {
    top: -160px;
  }
  70% {
    top: 10px;
    animation-timing-function: ease-in;
  }
  to {
    top: 0px;
    z-index: 3;
    animation-timing-function: ease-out;
  }
}

.link {
  opacity: 0;
  position: relative;
  top: -160px;
  z-index: -1;
}

.animate {
  animation: drop .4s;
  animation-fill-mode: forwards;
  opacity: 1;

  @for $i from 2 through $menu-items {
    &:nth-child(#{$i}) {
      animation-delay: $delay * ($i - 1);
    }
  }
}

</style>
