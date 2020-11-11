<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/items">Products</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <article>
      <router-view />
    </article>

    <footer class="py-5 small">
      <b-container>
        <b-row>
          <b-col>
            <address>
              <a href="http://maps.google.com/?q=1600 Pennsylvania Ave, Washington, District of Columbia, 20006">
                Company Name <br/>
                1600 Pennsylvania Ave. <br/>
                Washington D.C. 20006
              </a>
            </address>
          </b-col>
        </b-row>
      </b-container>
    </footer>

  </div>
</template>

<style scoped lang="scss">
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