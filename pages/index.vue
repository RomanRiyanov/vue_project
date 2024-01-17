<template>
  <div class="container">
    {{ $store.state.test }}
    <Test />
    <div class="grid">
      <UserCard
        v-for="guest in $store.state.guests"
        :guest="guest"
        :key="guest.id"
      />
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

const mixins = {
  created() {
    // console.log('created in mixin')
  },
  data() {
    return {
      mix: 'Hello mixin!',
    }
  },
}

export default {
  head() {
    return {
      title: 'Главная'
    }
  },
  data() {
    return {
      guests: [],
      // mix: 'NEW mix in export default' //эта строка перетрет mix значение из миксинов
    }
  },
  // middleware: 'redirect',
  asyncData() {
    // return axios.get('/posts').then(res => {
    //   console.log('res in asyncData request', res.data)
    //   const guests = res.data.splice(1,10);
    //   return { guests };
    // })
  },
  created() {},
  mounted() {
    // axios.get('/posts').then(res => {
    //   const guests = res.data.splice(1,10);
    //   this.$store.dispatch('getGuests', 'GET GUESTS dispatch')
    //   this.$store.commit('SET_GUESTS', guests)
    // })
    // this.$store.dispatch('getGuests')
  },
  methods: {
    test() {
      console.log('test')
    },
  },
  mixins: [mixins],
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.grid {
  display: grid;
  padding-inline: 50px;
  grid-template-columns: 1fr 1fr;
}
</style>
