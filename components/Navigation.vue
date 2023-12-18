<template>
  <nav class="navigation">
    <Logo :title="text" />
    <!-- <Logo /> -->
    <nuxt-link
      v-for="elem of linksArray"
      class="link"
      :to="elem.to"
      :key="elem.title"
    >
      {{ elem.title }}
    </nuxt-link>
    <button
      class="button"
      @click="toggleModal('переданные в обработчик данные', $event)"
    >
      {{ text }}
    </button>

    <button v-if="showBtn1" class="button">Первая кнопка</button>
    <button v-else-if="showBtn2" class="button">Вторая кнопка</button>
    <button v-else="showBtn2" class="button">Запасная кнопка</button>

    <!-- <input type="checkbox" v-model="showModal"/> -->
    <p>{{ counter }}</p>

    <!-- <Modal v-show="showModal" :onToggle="toggleModal"/> -->
    <Modal v-show="showModal" @modalClose="toggleModal" />
  </nav>
</template>

<script>
import Logo from './navigation/logo'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      text: 'Roma experiment',
      logoText: 'Logo Roma title',
      showBtn1: false,
      showBtn2: false,
      linksArray: [
        { to: '/', title: 'Main' },
        { to: '/about', title: 'About page' },
      ],
      showModal: false,
      counter: 0,
    }
  },
  methods: {
    handleClick() {
      console.log('Clicked!')
      // console.log(this.showModal)
      // console.log(this.linksArray)
    },
    toggleModal(data, event) {
      console.log('data from Modal', data)
      console.log('событие', event)
      this.showModal = !this.showModal
    },
    handleModalClose() {
      console.log('Сработало')
    },
  },
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: black;
  color: white;
  transition: 0.3s;
}

.link {
  color: black;
}
</style>
