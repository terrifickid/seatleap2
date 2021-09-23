<template>
  <div class="games">
    <div class="blue-header text-center text-white py-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4 class="mb-0 text-white">Today's Games</h4>
            <p class="mb-0">{{data.event.event.local_date}}</p>
          </div><!-- end col -->
        </div>
      </div>
    </div><!-- end blue header -->
    <div class="container-fluid">
      <div class="row">

        <div v-for="(ticket, index) in data.tickets.tickets" :key="index"  class="col-12">
          <router-link :to="'/section/'+ticket.id" v-bind:style="{backgroundImage: `url(${require('@/assets/default-stadium-image.jpg')})`}" class="pad gbg text-white">
            <div class="row">
              <div class="col-12 mb-5">
                <h3>Section {{ticket.seating.section}}</h3>
                <h3>Row {{ticket.seating.row}}</h3>
              </div><!-- end col -->
              <div class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>
              <div class="col mt-5 justify-content-end d-flex align-self-end"><h1 class="mb">${{ticket.price_per}}</h1></div>
            </div><!-- end row -->
          </router-link>
        </div>






        <div class="col-12">
          <div class="vPad d-flex justify-content-center">
            <img src="../assets/PoweredByVivid.png" style="width: 15rem;">
          </div>
        </div>
      </div>
    </div>

  </div><!-- end games -->
</template>
<script>
export default{
  computed:{
    data() {
      return this.$store.state.data;
    },
  }
}
</script>
<style>

  .blue-header{
    background: #306fb2;
    border-bottom: 2px solid white;
  }
  .gbg{
    display: block;
    background-image: url('../assets/default-stadium-image.jpg');
    background-size: cover;
    background-position: center center;
   border-bottom: 4px solid white;


  }
  .pad{padding: 2rem;}
  .vPad{padding: 4rem;}
  a:hover{text-decoration: none;}
</style>
