<template>
  <div>
    <div class="img-holder">
      <img src="../assets/img/element.png" class="background-img">
    </div>
    <div class="container">
      <div class="text-area">
        <h2>Download our mobile app</h2>
        <div class="break"></div>
        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely </p>
        <a class="btn btn-light">Download &#10515;</a>
      </div>
      <div class="img-container">
        <img src="../assets/img/mobileapp.png">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.img-holder {
  position: relative;

  .background-img {
    position: absolute;
    left: 0;
    top: -4.3em;
    z-index: -99;
  }
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem 19rem;

  @include for-big-desktop {
    padding: 5rem 8rem;
  }

  @include for-small-desktop {
    flex-direction: column-reverse;
    padding: 5rem 4rem;
  }

  @include for-tablet-landscape {
    padding: 2.5rem 3rem;
  }

  @include for-phone-only {
    padding: 1rem 1.5rem;
  }

  .text-area {
    width: 45%;
    padding: 2em;

    @include for-small-desktop {
      width: 80%;
      text-align: center;
    }

    @include for-tablet-landscape {
      width: 90%;
    }

    .break {
      margin: 3rem 0;

      @include for-small-desktop {
        margin: 3rem auto;
      }
    }

    h2 {

      @include for-desktop {
        font-size: size(medium-title);
        line-height: line(M);
      }

      @include for-small-desktop {
        font-size: size(large-title);
        line-height: line(XL);
      }

      @include for-tablet-landscape {
        font-size: size(medium-title);
        line-height: line(M);
      }
    }

    p {
      margin-bottom: 4rem;
    }
  }

  .img-container {
    width: 55%;

    @include for-small-desktop {
      width: 80%;
    }

    @include for-tablet-landscape {
      width: 90%;
    }

    img {
      width: 100%;
    }
  }
}

</style>
