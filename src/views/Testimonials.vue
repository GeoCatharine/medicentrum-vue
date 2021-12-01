<template>
  <div class="container">
    <div class="testimonials-box">
      <img src="../assets/img/element.png" class="background-img">
      <div class="carousel">
        <Testimony
          v-for="(testimonial, index) in reviews"
          :key="index"
          :url="testimonial.photo"
          :firstName="testimonial.first_name"
          :lastName="testimonial.last_name"
          :job='testimonial.job'
          :comment="testimonial.comment"
          class="slide"
          v-show="currentSlide === index + 1"
        />
      </div>
    </div>
    <div class="arrow-nav">
      <a class="arrow right" @click="prev()">&larr;</a>
      <div class="dots">
        <div
          v-for="(slide, index) in getSlideCount"
          :key="index"
          class="dot"
          :class="{active : index + 1 === currentSlide}"
          ></div>
      </div>
      <a class="arrow left" @click="next()">&rarr;</a>
    </div>
  </div>
</template>

<script>

import Testimony from '../components/Testimony.vue'

import { ref } from 'vue'

export default {
  data () {
    return {
      reviews: [],
      currentSlide: ref(1),
      getSlideCount: ''
    }
  },
  async created () {
    const response = await fetch('data.json')
    const data = await response.json()
    this.reviews = data

    this.getSlideCount = this.reviews.length
  },

  components: {
    Testimony
  },

  methods: {
    next () {
      if (this.currentSlide === this.getSlideCount) {
        this.currentSlide = 0
      }
      this.currentSlide += 1
    },
    prev () {
      if (this.currentSlide === 1) {
        this.currentSlide = 4
      } else {
        this.currentSlide -= 1
      }
    }
  }
}

</script>

<style lang="scss" scoped>
//sliding gallery

.carousel {
  height: 100%;
  width: 100%;
  position: relative;
  height: fit-content;

  .slide {
    position: absolute;
    top: 0;
    left: 0;
  }
}

//body

.container {
  padding: 5rem 19rem;

  @include for-big-desktop { //1400
    padding: 2.5rem 9rem;
  }

  @include for-desktop {  // 1100
    padding: 5rem 4rem;
  }

  @include for-phone-only {
    padding: 2.5rem 2rem;
  }
}

.testimonials-box {
  background: $background-gradient;
  width: 80%;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  color: $primary-color;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  height: 30rem;

  @include for-desktop {  // 1100
    width: 90%;
  }

  @include for-small-desktop {
    height: 45rem;
  }

  @include for-tablet-landscape {
    width: 100%;
  }

  @include for-tablet-portrait {
    height: 60rem;
  }

  .background-img {
    position: absolute;
    bottom: 2rem;
    left: -8.5rem;
    z-index: -99;

  }
}

// testimonial arrow nav

.arrow-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  margin: 0 auto;
  margin-top: 3rem;

  @include for-tablet-portrait {
    width: 100%;
  }

  a {
    color: $secondary-color;
    opacity: 30%;
    font-size: size(arrows);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 100%;
    }
  }
}

.dot {
  display: inline-block;
  margin: 0 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: $secondary-color;
  opacity: 30%;

  &.active {
    opacity: 100%;
  }
}

</style>
