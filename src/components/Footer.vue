<template>
  <div class="footer">
    <img src="../assets/img/elementsmall.png" class="background-img">
    <div class="footer-container">
      <div class="footer-info">
        <div class="logo">
          <div class="ball ball-light">M</div>
          <a href="#" class="nav-logo">MediCentrum</a>
        </div>
        <p class="hide">MediCentrum provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <p>©MediCentrum PTY LTD 2020. All rights reserved</p>
      </div>
      <div class="footer-nav">
        <div>
          <ul>
            <h3>Company</h3>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/testimonials" >Testimonials</router-link></li>
              <li><router-link to="/find-doctor" >Find a doctor</router-link></li>
              <li><router-link to="/apps" >Apps</router-link></li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Region</h3>
              <li><a href="" >Indonesia</a></li>
              <li><a href="" >Singapore</a></li>
              <li><a href="" >Hongkong</a></li>
              <li><a href="" >Canada</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Help</h3>
              <li><a href="" >Help center</a></li>
              <li><a href="" >Contact support</a></li>
              <li><a href="" >Instructions</a></li>
              <li><a href="" >How it works</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
  background: $background-gradient;
  height: 30rem;
  color: $primary-color;
  position: relative;
  overflow: hidden;

  .background-img {
    position: absolute;
    z-index: 2;
    bottom: -4.2rem;
    left: -1.6rem;
  }
}

.footer-container {
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 30rem;
  justify-content: space-between;
  align-items: center;

  @include for-desktop {
    width: 90%;
  }
}

.footer-info {
  width: 30%;

  @include for-big-desktop {
    width: 40%;
  }

  .logo {
    .nav-logo {
      color: $primary-color;
    }
  }
}

.footer-nav {
  display: flex;
  width: 40%;
  align-items: baseline;
  justify-content: space-between;

  @include for-desktop {
    width: 49%;
  }

  ul {
  padding: 0;
  list-style: none;
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

</style>
