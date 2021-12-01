<template>
    <div class="nav">
    <div class="logo">
      <div class="ball ball-dark">M</div>
        <a href="#" class="nav-logo">MediCentrum</a>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/find-doctor">Find a doctor</router-link>
      <router-link to="/apps">Apps</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/about">About us</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: $primary-color;
}

.logo {
  width: 40%;
}

.nav-links {
    width: 60%;
    display: flex;
    justify-content: space-between;

    a {
      text-align: center;
      font-size: size(medium-text);
      color: $text-color-lighter;
      width: 20%;

      &.router-link-exact-active{
        color: $text-color-dark;
        font-weight: weight(M);
      }

      &:hover {
        font-weight: weight(M);
      }
    }
  }
</style>
