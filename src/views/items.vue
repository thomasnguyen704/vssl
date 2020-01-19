<template>
  <div>
    <b-form-input
      v-model="filter"
      type="search"
      placeholder="Search..."
      autocomplete="off"
    />

    <b-table 
      borderless 
      :items="items" 
      :fields="fields" 
      :filter="filter" 
      v-if="filter"
    >
      <template v-slot:head(result)> 
        <span></span> 
      </template>
      <template v-slot:cell(result)="data">
        <router-link 
          class="lead text-capitalize" 
          :to=" { name: 'item', params:{ id: data.item.id } }" 
        > {{data.item.title}} </router-link> <br> 
        <span>{{ data.item.body }}</span> <br>
        <span class="small">{{ data.item.date }}</span>
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
        fields: ['result'],
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