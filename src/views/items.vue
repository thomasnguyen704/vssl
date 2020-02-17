<template>
  <div>
    <b-form-input v-model="filter" type="search" placeholder="Search..." autocomplete="off" />
    <b-table class="mt-4" :items="items" :filter="filter" >
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
    name: 'items',
    data() {
      return {
        filter: ''
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