<template>
    <div>
        {{ title }} {{ id }}
    </div>
</template>

<script>
    export default {
      data() {
        return {
          title: 'SingleBoard',
          id: this.$route.params.id
        }
      },
      computed: {
      }
    }
</script>

<style scoped>

</style>