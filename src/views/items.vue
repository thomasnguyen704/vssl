<template>
  <div class="container py-5">
    <b-card-group deck>
      <div v-for="item in items" :key="item.id">
        <router-link :to=" { name: 'item', params:{ id: item.id } }" >
        <b-card
          :title="item.title"
          :img-src="require('../assets/'+item.img)"
          img-alt="Image"
          tag="article"
          style="max-width: 20rem;"
          class="mb-4"
          align="center"
          title-tag="p"
        >
          <b-card-text>
            By {{item.manufacture}}
          </b-card-text>
        </b-card>
        </router-link>
      </div>
    </b-card-group>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none !important
  }
  .card-text {
    color: black;
  }
  .card-title {
    height: 50px;
  }
  .card-img {
    max-width: 40%;
    margin-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'items',
    data() {
      return {
      }
    },
    async created() {
      await this.loadItems()
    },
    methods: {
      ...mapActions(['readItems']),
      async loadItems() {
        await this.readItems()
      }
    },
    computed: {
      ...mapState(['items'])
    }
  }
</script>