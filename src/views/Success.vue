<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="text-uppercase text-white mt-3 mb-5">Get ready<br>to chill</h1>
          <h4 style="letter-spacing: 0.1rem;" class=" fbg text-uppercase font-weight-bold text-white">Your new seats will be<br>sent to your email</h4>
        </div>
      </div><!-- end col -->

    </div>
  </div>
</template>

<script>


export default {
  name: 'Landing',
  components: {

  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 4rem 0rem 1rem 0rem;
  background: url('../assets/coors/landing-bg.png');
  background-size: cover;
  background-position: center bottom;
  min-height: 100vh;
}

h1{font-size: 4rem; font-weight: bold; font-family: 'brandon-grotesque'}
h4{font-size: 1.5rem;}
</style>
