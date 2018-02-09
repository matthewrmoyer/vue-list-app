<template>
    <div>
        <nav>
            <div class="nav-wrapper money-blue darken-1">
                <!-- <a href="#!" class="brand-logo">Boards</a> -->
                <router-link to="/" class="brand-logo">
                    <i class="large material-icons">dashboard</i>
                </router-link>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/allboards">All Your Boards</router-link></li>       
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li><router-link to="/">Home</router-link></li>     
                    <li><router-link to="/allboards">All Your Boards</router-link></li>                         
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
      created() {
        $(document).ready(() => {
          $('.button-collapse').sideNav()
        })
      }
    }
</script>

<style lang="scss" scoped>

</style>