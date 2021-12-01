<template>
  <div class="container">
    <div class="img-container">
      <img src="../assets/img/providers-img.png" alt="doctors">
    </div>
    <div class="text-area">
      <h2>Leading healthcare providers</h2>
      <div class="break"></div>
      <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver </p>
      <a class="btn btn-light">Learn more</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

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
    flex-direction: column;
    padding: 5rem 4rem;
  }

  @include for-tablet-landscape {
    padding: 2.5rem 3rem;
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

  .text-area {
    padding: 2rem;
    width: 45%;

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

      @include for-tablet-portrait {
        font-size: size(medium-title);
        line-height: line(M);
      }
    }

    p {
      margin-bottom: 4rem;
    }
  }
}

</style>
