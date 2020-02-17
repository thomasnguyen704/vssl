<template>
  <div>
    <b-table :items="users">
      <template v-slot:cell(id)="data">
        <router-link :to=" { name: 'user', params:{ id: data.item.id } }" > 
          {{data.item.id}} 
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'users',
    async created() {
      await this.loadUsers()
    },
    methods: {
      ...mapActions(['readUsers']),
      async loadUsers() {
        await this.readUsers()
      }
    },
    computed: {
      ...mapState(['users'])
    }
  }
</script>