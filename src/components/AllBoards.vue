<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ boards }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      data() {
        return {
          title: 'All Boards'
        }
      },
      computed: {
        ...mapGetters('allBoards', [
          'boards'
        ])
      }
    }
</script>

<style scoped>

</style>