<template>
  <div>
    <header>
      <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="../assets/hospital.mp4" type="video/mp4"> <!-- Video by Tima Miroshnichenko from Pexels -->
        </video>
      <div class="container h-100 pb-5">
        <div class="d-flex h-100 text-center align-items-center pb-5">
          <div class="w-100 text-white px-5">
            <img class="brandImg" src="../assets/logo.png" />
            <h3 class="font-weight-light py-4">Providing exceptional quality personal protective equipment to companies that place staff safety as a key ingredient to the success of their organization.</h3>
            <anchor-router-link :to="{name: 'home', hash: '#article'}" class="btn btn-danger">More</anchor-router-link>
          </div>
        </div>
      </div>
    </header>

    <article class="d-flex align-items-center py-5" id="article">
      <b-container class="text-center">
        <h3 class="font-weight-light">The mission of Veterans Specialty Supply + Logistics is to provide exceptional quality personal protective equipment to companies that place staff safety as a key ingredient to the success of their organization. VSSL is committed to providing exceptional customer service to support the safety goals of their clients and to provide products that will have a positive impact on the safety statistics of our clients.</h3>
      </b-container>
    </article>

    <article class="d-flex align-items-center py-5 darkBg">
      <b-container>
        <b-row>
          <b-col sm="6">
            <h1>Our Goals</h1>
            <ul class="lead">
              <li>To continually focus on top-quality customer service.</li>
              <li>To provide innovative products.</li>
              <li>To be responsive to the changing needs of the safety market.</li>
              <li>The products provided by VSSL are considered quality items that will improve the safety of the employee.</li>
              <li>Veterans Specialty Supply + Logistics represents a number of suppliers and strives to only distribute those products that would be of the highest quality that meet the industry standards.</li>
            </ul>
          </b-col>
          <b-col sm="6">
            <img src="../assets/logo.png" class="img-fluid px-5"/>
          </b-col>
        </b-row>
      </b-container>
    </article>

    <article class="d-flex align-items-center py-5">
      <b-container>
        <h1>The Team</h1>
        <b-row class="py-5">
          <b-col>
            <b-card-group deck>
              <b-card title="Person 1" :img-src="require('../assets/person.jpg')" img-alt="Image" img-top>
                <b-card-text> This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer. </b-card-text>
              </b-card>
              <b-card title="Person 2" :img-src="require('../assets/person.jpg')" img-alt="Image" img-top>
                <b-card-text> This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer. </b-card-text>
              </b-card>
              <b-card title="Person 3" :img-src="require('../assets/person.jpg')" img-alt="Image" img-top>
                <b-card-text> This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer. </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-container>
    </article>
  </div>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
  header {
    position: relative;
    background-color: black;
    height: 100vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }
  header video {
    position: absolute;
    top: 80%;
    left: 60%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  header .container {
    position: relative;
    z-index: 2;
  }
  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
  @media (pointer: coarse) and (hover: none) {
    header {
      background: url('../assets/hospital.png') dimgrey no-repeat center center scroll;
    }
    header video {
      display: none;
    }
  }
  .brandImg {
    width: 50%;
  }
  article {
    min-height: 70vh;
  }
  .darkBg {
    background-color: dimgrey;
    color: white;
  }
</style>

<script>
import AnchorRouterLink from 'vue-anchor-router-link'

export default {
  name: 'Home',
  components: {
    AnchorRouterLink
  }
}
</script>