<template>
  <div>
    <div class="top-part img-holder">
      <h2>What our customer are saying</h2>
      <div class="break"></div>
      <img src="../assets/img/element.png">
    </div>
    <div class="bottom-part">
      <div class="profile">
        <div class="profile-pic-border">
          <img :src="url">
        </div>
        <div class="profile-info">
          <h3>{{ firstName }} {{lastName}}</h3>
          <p>{{ job }}</p>
        </div>
      </div>
      <div class="user-textbox">
        <p>"{{ comment }}"</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'url', 'firstName', 'lastName', 'job', 'comment'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.top-part {
  position: relative;
  text-align: center;

  h2 {
    color: $primary-color;

    @include for-tablet-landscape {
      font-size: size(medium-title);
    }

    @include for-tablet-portrait {
      line-height: line(M);
    }

    @include for-phone-only {
      font-size: size(large-text);
      line-height: line(S);
    }
  }

  .break {
    background-color: $primary-color;
    margin: 0 auto;
  }

  img {
    position: absolute;
    right: 13px;
    top: 11px;

    @include for-tablet-landscape {
      display: none;
    }
  }
}

.bottom-part {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem 3rem;

  @include for-small-desktop {
    flex-direction: column;
    align-items: center;
    margin: 5rem 3rem;
  }

  @include for-phone-only {
    margin: 2rem 3rem;
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include for-tablet-portrait {
      flex-direction: column;
      text-align: center;
    }
  }

  .user-textbox {
    width: 40%;

    @include for-small-desktop {
      width: 80%;
      text-align: center;
      margin-top: 2rem;
    }

    @include for-tablet-portrait {
      width: 100%;
    }
  }
}

.profile-info {

  h3 {
    color: $primary-color;
    font-size: size(large-text);
    font-weight: weight(M);
  }

  p {
      max-width: 20ch;
    }
}

.profile-pic-border {

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  position: relative;
  width: 138px;
  height: 138px;
  border-radius: 50%;
  border: $primary-color 5px solid;
  margin-right: 2rem;
  background-color: $primary-color;

  @include for-tablet-portrait {
    margin-right: 0;
  }

}

</style>
