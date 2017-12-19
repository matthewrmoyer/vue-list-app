<template>
  <div class="hello">
  <!-- <nav> -->
    <!-- <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div> -->
  <!-- </nav> -->
    <ul>
      <li>asdf</li>
      <li>asdf</li>
      <li>asdf</li>
      <li>asdf</li>      
    </ul>
    <a class="waves-effect waves-light btn">button</a>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome to Your Vue.js Note App'
    }
  },
  methods: {
    log() {
      console.log('sdf')
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
