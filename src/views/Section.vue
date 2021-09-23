<template>
  <div class="games">
<pre>{{data}}</pre>
    <div class="blue-header text-center text-white py-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4 class="mb-0 text-white">Today's Game</h4>
            <p class="mb-0">{{data.event.event.local_date}}</p>
          </div><!-- end col -->
        </div>
      </div>
    </div><!-- end blue header -->
    <div class="container-fluid">
      <div class="row">





        <div class="col-12">
          <div class="pad gbg text-white">
            <div style="min-height: 60vw;" class="row d-flex align-items-end">

              <div  class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>

            </div><!-- end row -->
          </div>
        </div>

        <div class="col-12">

          <div class="row">
            <div class="col">
              <ul>
                <li class="pad">
                  <div class="row">
                    <div class="col"><h4 class="fbg">Section {{selected.seating.section}}<br>Row {{selected.seating.row}}</h4></div><div class="col text-right"><h5 class="font-weight-bold">?? Seats</h5></div>
                  </div>
                </li>
                <li>
                  <ul>
                      <li class="pad">
                        <div class="row d-flex align-items-center">
                          <div class="col"><h4 class="fbg mb-0">Price (EA)</h4></div><div class="col text-right"><h5 class="font-weight-bold lblue mb-0 text-bold">${{selected.price_per}}</h5></div>
                        </div>
                      </li>
                      <li style="border: 0;" class="pad">
                        <div class="row d-flex align-items-center">
                          <div class="col"><h4 class="fbg mb-0">Total (USD)</h4></div><div class="col text-right"><h5 class="font-weight-bold lblue mb-0 text-bold">$??</h5></div>
                        </div>
                      </li>
                  </ul>
                </li>
              </ul>
            </div><!-- end col -->
            <div class="col-10 offset-1 text-center">
              <h5 style="line-height: 1.75rem;" class="mt-5 mb-4 text-normal">By selecting Claim Upgrade, you agree to the<br><a href="#">Terms and Conditions</a></h5>
              <router-link to="/success" class="mb-4 btn bold btn-light btn-lg text-uppercase btn-block ">Claim Upgrade</router-link>
            </div><!-- end col -->

          </div><!-- end row -->
        </div><!-- end col-12 -->


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
  selected(){
    var filter = this.data.tickets.tickets.filter((ticket) => {
      if(ticket.id == this.$route.params.id) return true;
    });
    return filter[0];
  }
}
}
</script>
<style>
  ul{list-style: none; margin:0; padding:0;}
  ul ul{margin-left: 3rem;}
  h4{font-weight: 100; color: #4b4b4b;}
  h5{color: #4b4b4b;}
  .blue-header{
    background: #306fb2;
    border-bottom: 2px solid #e8e8e8;
  }
  .gbg{
    display: block;
    background: url('../assets/default-stadium-image.jpg');
    background-size: cover;
    background-position: center center;
   border-bottom: 4px solid white;



  }

  li{border-bottom: 1px solid grey;}
  li ul li.pad{padding: 1.5rem 1.5rem 1.5rem 0;}
  .pad{padding: 1.5rem;}
  .vPad{padding: 2rem;}
  a:hover{text-decoration: none;}
</style>
