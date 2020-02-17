<template>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/users">Users</b-nav-item>
        <b-nav-item to="/items">Items</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://bootstrap-vue.js.org/" target="_blank">Bootstrap Vue</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>