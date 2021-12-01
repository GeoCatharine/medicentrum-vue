<template>
  <div class="nav">
    <div class="conteiner">
      <div class="logo">
        <div class="ball ball-dark">M</div>
          <a href="#" class="nav-logo">MediCentrum</a>
        </div>
      <div class="burger-nav" @click="toggleMenu = !toggleMenu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
    </div>
    <div class="burger-nav-container" v-show="toggleMenu">
      <ul class="burger-nav-links">
        <li
          class="link"
          v-bind:class="{ 'animate' : toggleMenu } ">
            <router-link to="/" > Home </router-link>
        </li>
        <li
          class="link"
          v-bind:class="{ 'animate' : toggleMenu } ">
            <router-link to="/find-doctor" > Find a doctor </router-link>
        </li>
        <li
          class="link"
          v-bind:class="{ 'animate' : toggleMenu } ">
            <router-link to="/apps" > Apps </router-link>
        </li>
        <li
          class="link"
          v-bind:class="{ 'animate' : toggleMenu } ">
            <router-link to="/testimonials"> Testimonials </router-link>
        </li>
        <li
          class="link"
          v-bind:class="{ 'animate' : toggleMenu } ">
            <router-link to="/about"> About us </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>

.nav {
  padding: 30px;
  padding-top: 0;
}

.conteiner {
  background-color: #FFFFFF;
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 30px;
}

.burger-nav {
    display: flex;
    opacity: 100%;

    flex-direction: column;
    align-items: baseline;
    padding: 9px 0px;
    cursor: pointer;
}

.burger-line {
    width: 25px;
    height: 4px;
    border-radius: 5px;
    margin: 2px auto;
    background: $secondary-color;
}

.burger-nav-container {
    opacity: 100%;
    width: 100%;
}

.burger-nav-links {
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    text-align:center;

    a {
      width: 100%;
      padding: 0.5%;
      display: block;
      text-align: center;
      font-size: size(large-text);

      &.router-link-exact-active{
        color: $text-color;
        font-weight: weight(M);
      }

      &:hover {
        font-weight: weight(M);
      }
    }
}

//animation

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
