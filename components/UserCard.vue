<template>
  <nuxt-link :to="`/id/${guest.id}`" class="card">
    <div class="text">
      <h2>{{ guest.id }}</h2>
      <p>{{ guest.title }}</p>
      <p>{{ guest.body }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      guest: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 200px;
    height: 350px;
    margin: 30px;
    background: white;
    border-radius: 10px;
  }
  .image {
    width: 100%;
    height: 190px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
  .text {
    /* height: 40%; */
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
  }
  .email {
    margin: 10px 0;
  }
</style>
