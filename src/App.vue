<template>
  <div>
    <navbar class="mb-5"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar';

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>