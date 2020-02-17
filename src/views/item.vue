<template>
  <b-form>
    <b-form-group id="group-id" class="text-capitalize" label="id" label-for="input-id">
      <b-form-input input="input-id" readonly v-model="item.id"/>
    </b-form-group>
    
        <b-form-group id="group-date" class="text-capitalize" label="date" label-for="input-date">
      <b-form-input input="input-date" type="date" v-model="item.date"/>
    </b-form-group>

    <b-form-group id="group-title" class="text-capitalize" label="title" label-for="input-title">
      <b-form-input input="input-title" v-model="item.title"/>
    </b-form-group>

    <b-form-group id="group-body" class="text-capitalize" label="body" label-for="input-body">
      <b-form-textarea input="input-body" rows="3" v-model="item.body"/>
    </b-form-group>

    <b-button variant="outline-secondary" class="mr-2" @click="cancelBack">Cancel</b-button>
    <b-button variant="primary" @click="saveItem">Save</b-button>
  </b-form>
</template>

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