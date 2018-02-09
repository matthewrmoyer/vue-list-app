<template>
  <div class="hello">
    <h2>Welcome to Boards</h2>
    <h5>Tap the button below to see all of your boards.</h5>
      <h5> There you can create, edit, and delete your boards.</h5>
      <h5>You can press each individual board to modify that specific one.</h5>
      <br>
    <router-link to="/allboards">
      <a class="waves-effect waves-light btn" href="/allboards">All Boards</a>
    </router-link>                       



  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome to Your Vue.js Note App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  // color: #42b983;
}
</style>
