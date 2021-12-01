<template>
  <div class="img-holder">
    <img src="../assets/img/Vector.png" alt="bubble" class="background-img">
    <div class="card-container">
      <div class="card-main-text">
        <h2> Our services</h2>
        <div class="break"></div>
        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>
      <div class="cards">
        <div class="card">
          <img src="../assets/img/search.png">
          <h3>Search doctor</h3>
          <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>
        <div class="card">
          <img src="../assets/img/online.png">
          <h3>Online pharmacy</h3>
          <p>Buy  your medicines with our mobile application with a simple delivery system</p>
        </div>
        <div class="card img-holder">
          <img src="../assets/img/elementsmall.png" alt="dots small" class="card-dots">
          <img src="../assets/img/consultation.png">
          <h3>Consultation</h3>
          <p>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>
        <div class="card">
          <img src="../assets/img/detail.png">
          <h3>Details info</h3>
          <p>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>
        <div class="card">
          <img src="../assets/img/Frame.png" class="emergency">
          <h3>Emergency care</h3>
          <p>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
        </div>
        <div class="card">
          <img src="../assets/img/tracking.png">
          <h3>Tracking</h3>
          <p>Track and save your medical history and health data </p>
        </div>
      </div>
      <a class="btn btn-light">Learn more</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

  .card-container {
    width: 100%;

    a {
      display: block;
      margin: 5rem auto;
      padding: 0;
    }
  }

  .img-holder {
    position: relative;

    .background-img {
      position: absolute;
      left: -34.5rem;
      top: 0;
      z-index: -99;
    }

    .card-dots {
      position: absolute;
      right: -5rem;
      bottom: -7rem;
      z-index: -99;
    }
  }

  .card-main-text {
    margin: 0 auto;
    text-align: center;
    width: 60%;

    @include for-tablet-landscape {
      width: 80%;
    }

    .break {
      margin: 3rem auto;
    }
  }

.cards {
  padding-top: 7rem;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;

  @include for-big-desktop {
    width: 90%;
  }
}

.card {
  text-align: left;
  width: 20%;
  display: inline-block;
  padding: 5rem;
  background-color: $primary-color;
  border-radius: 10%;
  margin: 0.5rem;
  box-shadow: $shadow-box;

  @include for-desktop {
    padding: 4rem;
  }

  @include for-small-desktop {
    width: 35%;
  }

  @include for-tablet-landscape {
    width: 60%;
    text-align: center;
  }

  @include for-tablet-portrait {
    width: 80%;
  }
}

  .emergency {
    padding-bottom: 2.5rem;
  }

</style>
