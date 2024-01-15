<template>
  <article class="container">
    <div class="text">
      <h2>Пост под гордым номером {{ guest.id }}</h2>
      <p>{{ guest.title }}</p>
      <p>{{ guest.body }}</p>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    guest() {
      const { id } = this.$route.params
      if (id) return this.$store.getters.getCurrentPost(id)
      // else $this.router.push('/');
      else redirect('/')
    },
  },
  mounted() {
    // console.log(this.$route, 'here is route')
  },
}
</script>

<style scoped>
.text {
  height: 40%;
  background-color: aquamarine;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
