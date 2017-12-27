<template>
    <div>
        {{ title }} {{ id }}
        {{ board }}
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      data() {
        return {
          title: 'SingleBoard',
          id: this.$route.params.id
        }
      },
      methods: {
        ...mapActions('singleBoard', [
          'getBoard'
        ])
      },
      computed: {
        ...mapGetters('singleBoard', [
          'board'
        ])
      },
      mounted() {
        this.getBoard(this.id)
      }
    }
</script>

<style scoped>

</style>