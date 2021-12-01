<template>
  <div>
    <div class="jumbotron">
      <img class="jumbo-dots" src="../assets/img/elementsmall.png" alt="dots">
      <div class="jumbotron-container">
        <div class="jumbo-textarea">
          <h1>Virtual healthcare for you</h1>
          <p>Medicentrum offers progressive and affordable healthcare, accessible on mobile and online for everyone</p>
          <a href="#" class="btn btn-progress" >Consult today</a>
        </div>
        <div class="img-container">
          <img class="jumbo-img" src="../assets/img/illustration.png" alt="doctors">
        </div>
      </div>
    </div>
    <div class="img-holder">
      <img src="../assets/img/Vector.png" class="bg-element background-img">
      <img src="../assets/img/elementsmall.png" class="small-element background-img">
      <div class="article-content">
        <div class="article-main-text">
          <h2>Check out our latest article</h2>
          <div class="break" />
        </div>
        <div class="showcase-holder">
          <div class="article-card img-holder">
            <img src="../assets/img/elementsmall.png" class="article-dots background-img">
            <div class="img-box">
              <img class="article-img" src="../assets/img/showcase1.png">
            </div>
            <div class="card-text">
              <div class="top-box">
                <h3>Disease detection, check up in laboratory</h3>
                <p>In this case, the role of the health laboratory is bery important to do a disease detection...</p>
              </div>
              <div class="bottom-box">
                <a href="#">Read more &rarr;</a>
              </div>
            </div>
          </div>
          <div class="article-card">
            <div class="img-box">
              <img class="article-img" src="../assets/img/showcase2.png">
            </div>
            <div class="card-text">
              <div class="top-box">
                <h3>Herbal medicines that are safe for consumption</h3>
                <p> Herbal medicine is bery widely used at ths time because of its very good for your health...</p>
              </div>
              <div class="bottom-box">
                <a href="#">Read more &rarr;</a>
              </div>
            </div>
          </div>
          <div class="article-card">
            <div class="img-box">
              <img class="article-img" src="../assets/img/showcase3.png">
            </div>
            <div class="card-text">
              <div class="top-box">
                <h3>Natural care for healthy facial skin</h3>
                <p> A healthy lifestyle should start from now and also for you skin health. There are some...</p>
              </div>
              <div class="bottom-box">
                <a href="#">Read more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <a class="btn btn-light">View all</a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.jumbotron {
  position: relative;
  padding: 5rem 19rem;

  @include for-big-desktop { //1400
    padding: 5rem 9rem;
  }

  @include for-desktop {  // 1100
    padding: 5rem 4rem;
  }

  .jumbo-dots {
    position: absolute;
    left: -2.9em;
    top: -4.3em;
    z-index: -99;
  }
}

.jumbotron-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @include for-small-desktop {
    flex-direction: column-reverse;
  }

  .jumbo-textarea {
    width: 30%;
    height: fit-content;

    @include for-small-desktop {
    width: 70%;
    text-align: center;
    }

    @include for-tablet-landscape {
      width: 90%;
    }

    p {
      margin: 2em 0;
    }

    h1 {
      @include for-desktop{
        font-size: size(large-title);
      }

      @include for-small-desktop {
        font-size: size(xlarge-title);
      }

      @include for-tablet-landscape {
        font-size: size(large-title);
      }
    }
  }

  .img-container {
    width: 50%;

    @include for-small-desktop {
      width: 70%;
      padding-bottom: 50px;
    }

    @include for-tablet-landscape {
      width: 80%;
    }

    .jumbo-img {
      width: 100%;
    }
  }
}

  // articles

.img-holder {
  position: relative;

  .background-img {
    position: absolute;
    z-index: -99;
  }

  .bg-element {
    top: -10.0rem;
    right: -29.0rem;
    transform: rotate(-180deg);

    @include for-small-desktop {
      width: 70%;
      top: 2.5rem;
    }
  }

  .small-element {
    bottom: -44px;
    right: -20px;
  }
}

.article-content {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
}

.article-main-text {
  margin-top: 100px;

  @include for-small-desktop {
    margin-top: 0;
  }

  h2 {
    margin: 0.5em 0;
  }

  .break {
    margin: 0 auto;
  }
}

.showcase-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 5rem auto;

  @include for-small-desktop {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
}

.article-card {
  width: 30%;
  padding-bottom: 4.5rem;
  border-radius: 2.5rem;
  text-align: left;
  box-shadow: $shadow-box;
  background-color: $primary-color;

  @include for-small-desktop {
    display: flex;
    flex-direction: row;
    width: 90%;
    padding-bottom: 0;
    margin-bottom: 3rem;
  }

  @include for-tablet-landscape {
    flex-direction: column;
    width: 70%;
  }

  .img-box {
    @include for-small-desktop {
      width: 70%;
    }

    @include for-tablet-landscape {
      width: 100%;
    }
  }
  .article-img {
    width: 100%;

    @include for-small-desktop {
      height: 100%;
      border-radius: 2.5rem;
    }

    @include for-tablet-landscape {
      border-radius: 0;
    }
  }

  .article-dots {
    top: -45px;
    left: -50px;
  }
}

.card-text {
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include for-small-desktop {
  }

  .top-box {
    h3 {
      @include for-small-desktop {
        font-size: size(medium-text);
        line-height: line(XS);
      }
    }

    p {
      font-size: size(small-text);
      line-height: line(S);
      color: $text-color-lighter;
    }
  }

  .bottom-box {
    margin-top: auto;
    padding: 2rem 0;

    @include for-small-desktop {
      padding: 1.5rem 0rem;
    }

    a {
    color: $secondary-color;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>
