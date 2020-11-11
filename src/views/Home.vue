<template>
  <div>
    <header>
      <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="../assets/hospital.mp4" type="video/mp4"> <!-- Video by Tima Miroshnichenko from Pexels -->
        </video>
      <div class="container h-100 pb-5">
        <div class="d-flex h-100 text-center align-items-center pb-5">
          <div class="w-100 text-white pb-5">
            <img class="brandImg" src="../assets/logo.png" />
            <p class="lead">Mission Statement.</p>
            <b-button>More</b-button>
          </div>
        </div>
      </div>
    </header>
    <article class="d-flex align-items-center py-5">
      <b-container class="text-center">
        <h1>About the Company</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </b-container>
    </article>

    <article class="d-flex align-items-center py-5 darkBg">
      <b-container>
        <b-row>
          <b-col sm="6">
            <h1>About the Product</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    min-height: 80vh;
  }
  .darkBg {
    background-color: dimgrey;
    color: white;
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>