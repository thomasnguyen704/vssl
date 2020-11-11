<template>
  <b-container class="py-5 mb-5">
    <b-row>
      <b-col>
        <b-img :src="require('../assets/'+item.img)" fluid center class="prodImg"></b-img>
      </b-col>
      <b-col>
        <b-img :src="require('../assets/'+item.img2)" fluid center class="prodImg"></b-img>
      </b-col>
    </b-row>
    <hr class="my-5"/>
    <b-row>
      <b-col sm="12">
        <h2>{{item.title}}</h2>
        <h5 class="mb-4">By {{item.manufacture}}</h5>
        <div v-html="item.body"></div>
      </b-col>
    </b-row>
    <hr class="my-5"/>
    <b-row>
      <b-col>
        <p><a :href="item.link" target="_blank">More information from {{item.manufacture}}.</a></p>
        <p>Contact <a href="mailto: ray@supply.vet"> Ray Hamby </a> for  pricing information.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
  .prodImg {
    max-height: 30vh;
  }
</style>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'item',
    props: {
      id: { 
        type: Number, 
        default: 0 
      }
    },
    created() {
      this.item = { ...this.filterItemById(this.id) }
    },
    computed: {
      ...mapGetters(['filterItemById'])
    },
    methods: {
      ...mapActions(['updateItem', 'createItem']),
      async saveItem() {
        this.item.id ?
          await this.updateItem(this.item) :
          await this.createItem(this.item)
          this.$router.push({ name: 'items' })
      },
      cancelBack(){
        this.$router.back();
      }
    }
  }
</script>