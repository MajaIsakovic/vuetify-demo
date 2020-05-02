<template>
  <v-app style="background: #f4f4f4">
    <navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .gray{
    background: #4f4f4f;
  }
</style>
