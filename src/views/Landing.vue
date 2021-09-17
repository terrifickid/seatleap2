<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="text-uppercase text-white mb-5">Upgrade your<br>seat for free<br>and chill</h1>
          <p class="mb-2 blue">Enter your date of birth to continue:</p>
        </div>
      </div><!-- end col -->
      <div class="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <div class="row">
          <div class="col"><input type="text" placeholder="MM" class="form-control text-center"></div>
          <div class="col"><input type="text" placeholder="DD"  class="form-control text-center"></div>
          <div class="col"><input type="text" placeholder="YYYY" class="form-control text-center"></div>
        </div>
      </div><!-- end col -->
      <div class="col-10 offset-1 col-md-6 offset-md-3 col-lg-6 offset-lg-3 text-center">
        <p class="mt-3 dblue" style="margin-bottom: 15rem;" ><small>Must be 21 years or older to participate. Upgrades are<br> available on a first come, first served basis.</small></p>
      </div>
      <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <router-link to="/games" class="btn bold btn-light btn-lg text-uppercase btn-block mb-4">Get My Seats</router-link>
        <img src="../assets/coors/landing-bottom-image.png" class="img-fluid">
      </div>
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
small{line-height: 1.25rem; display: block;}
.home{
  padding: 4rem 0rem 1rem 0rem;
  background: url('../assets/coors/landing-bg.png');
  background-size: cover;
  background-position: center bottom;
  min-height: 100vh;
}

h1{font-size: 2.75rem; font-weight: bold; font-family: 'brandon-grotesque'}
</style>
