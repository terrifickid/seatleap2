<template>
  <div class="games">

    <div class="blue-header text-center text-white py-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4 class="mb-0">Today's Games</h4>
            <p class="mb-0">Thursday, April 27, 2017 8:00PM</p>
          </div><!-- end col -->
        </div>
      </div>
    </div><!-- end blue header -->
    <div class="container-fluid">
      <div class="row">

        <div class="col-12">
          <router-link to="/section" class="pad gbg text-white">
            <div class="row">
              <div class="col-12 mb-5">
                <h3>Section 101</h3>
                <h3>Row 13</h3>
              </div><!-- end col -->
              <div class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>
              <div class="col mt-5 justify-content-end d-flex align-self-end"><h1 class="mb">$0</h1></div>
            </div><!-- end row -->
          </router-link>
        </div>

        <div class="col-12">
          <router-link to="/section" class="pad gbg text-white">
            <div class="row">
              <div class="col-12 mb-5">
                <h3>Section 101</h3>
                <h3>Row 13</h3>
              </div><!-- end col -->
              <div class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>
              <div class="col mt-5 justify-content-end d-flex align-self-end"><h1 class="mb">$0</h1></div>
            </div><!-- end row -->
          </router-link>
        </div>


        <div class="col-12">
          <router-link to="/section" class="pad gbg text-white">
            <div class="row">
              <div class="col-12 mb-5">
                <h3>Section 101</h3>
                <h3>Row 13</h3>
              </div><!-- end col -->
              <div class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>
              <div class="col mt-5 justify-content-end d-flex align-self-end"><h1 class="mb">$0</h1></div>
            </div><!-- end row -->
          </router-link>
        </div>


        <div class="col-12">
          <router-link to="/section" class="pad gbg text-white">
            <div class="row">
              <div class="col-12 mb-5">
                <h3>Section 101</h3>
                <h3>Row 13</h3>
              </div><!-- end col -->
              <div class="col-3 mt-5"><img class="img-fluid" src="../assets/coors/brand_logo.png"></div>
              <div class="col mt-5 justify-content-end d-flex align-self-end"><h1 class="mb">$0</h1></div>
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
<style>

  .blue-header{
    background: #306fb2;
    border-bottom: 2px solid white;
  }
  .gbg{
    display: block;
    background: url('../assets/default-stadium-image.jpg');
    background-size: cover;
    background-position: center center;
   border-bottom: 4px solid white;


  }
  .pad{padding: 2rem;}
  .vPad{padding: 4rem;}
  a:hover{text-decoration: none;}
</style>
