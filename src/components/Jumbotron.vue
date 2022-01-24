<template>
  <div class="jumbotron">
      <div class="inner-container">
      <div class="container">
          <nav>
              <div class="bar-sx"></div>
              <div class="bar-dx"></div>
          </nav>
      </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'Jumbotron',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/_variables.scss";
.jumbotron {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/images/hero-image.png");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    .inner-container {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: relative;
        .contanier {

        }
    }
    }
</style>>

