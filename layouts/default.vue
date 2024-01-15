<template>
  <div>
    <Navigation />
    <Nuxt />
    <notifications classes="notifications-wrap" group="foo" />
    <notifications classes="notifications-wrap-red" group="bar" />
  </div>
</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited {
  color: black;
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  background: url('~static/images/bgd.jpeg') center no-repeat;
  background-size: cover;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.notifications-wrap {
  padding: 15px;
  margin: 15px;
  background: #228c22;
  color: white;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transition: 0.3s;
}

.notifications-wrap-red {
  padding: 15px;
  margin: 15px;
  background: red;
  color: white;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transition: 0.3s;
}
</style>
