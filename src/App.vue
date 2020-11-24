<template>
  <div>
    <b-navbar sticky toggleable="lg" type="dark" variant="secondary" class="small">
      <b-container>
        <b-navbar-brand @click="scrollToTop">
            <img src="./assets/logo.png" class="img-fluid" alt="logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/items">Products</b-nav-item>
            <b-nav-item to="/resources">Resources</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <anchor-router-link 
                :to="{
                  name: footer, 
                  hash: '#pageFooter'
                }" 
                class="btn btn-sm btn-info"
              >
                Contact
              </anchor-router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <article>
      <router-view />
    </article>

    <footer class="py-5 small" id="pageFooter">
      <b-container>
        <b-row>
          <b-col>
            <address>
              <a href="http://maps.google.com/?q=1 Perimeter Park South 100N, Birmingham, AL, 35243">
                Veterans Specialty Supply + Logistics <br/>
                1 Perimeter Park South 100N Rm. 149 <br/>
                Birmingham AL 35243 U.S.A.
              </a>
            </address>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  
  </div>
</template>

<style scoped lang="scss">
  .navbar-brand img{
    height: 30px;
  }
  article {
    min-height: 75vh;
    font-weight: 100;
  }
  footer {
    bottom: 0;
    width: 100%;
    min-height: 25vh;
    color: white;
    background-color: rgb(51,51,51);
  }
  address * {
    color: white !important;
  }
</style>

<script>
import AnchorRouterLink from 'vue-anchor-router-link'

export default {
  name: 'App',
  components: {
    AnchorRouterLink
  },
  data() {
    return {
      footer: null
    }
  },
  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>