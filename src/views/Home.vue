<template>
  <div class="home">
      <v-container grid-list-md >
        <!-- <h1 style="text-align: center">Home page</h1> -->
        <div class="align">
          <v-img class="img" src="../assets/keep-calm-stay-home.jpg"></v-img>
        </div>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  
  }
}
</script>

<style>
  .img{
    height: 550px;
    width: 400px;
  }
  .align{
      margin: auto;
      width: 50%;
  }
</style>
