<template>
  <NavBar/>
  <div class="page-wrap">
     <!-- To have router-view-->
  <router-view></router-view>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

