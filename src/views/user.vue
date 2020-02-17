<template>
  <div>
    <select class="mb-5" v-model="filter">
      <option v-for="item in items" :key="item.id" :value="item.id.toString()">{{item.id}} </option>
    </select>
    <b-table :items="items" :filter="filter">
      <template v-slot:cell(id)="data">
        <router-link :to=" { name: 'item', params:{ id: data.item.id } }" > 
          {{data.item.id}} 
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'user',
    data(){
      return {
        filter: null
      }
    },
    props: {
      id: { 
        type: Number, 
        default: 0 
      }
    },
    async created() {
      await this.loadItemsByUser()
    },
    methods: {
      ...mapActions(['readItemsByUser']),
      async loadItemsByUser() {
        await this.readItemsByUser()
      }
    },
    computed: {
      ...mapState(['items'])
    }
  }
</script>