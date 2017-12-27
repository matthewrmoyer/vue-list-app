<template>
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <transition-group 
          name="fade" appear 
          v-bind:css="false"  
          v-on:before-enter="beforeEnter"
          v-on:enter="enter" 
          > 
          <li 
            v-for="(board, index) in boards" 
            :key="board.id"
            :data-index=index
            >
            <router-link :to="`/singleBoard/${board.id}`">{{ board.name }}</router-link>                    
          </li>
        </transition-group>
      </ul>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      data() {
        return {
          title: 'All Boards',
          show: true
        }
      },
      computed: {
        ...mapGetters('allBoards', [
          'boards'
        ])
      },
      methods: {
        beforeEnter(el) {
          console.log('beforeEnter')
          el.style.opacity = 0
        },
        enter(el, done) {
          console.log('enter')
          let delay = el.dataset.index * 350
          console.log(delay)
          setTimeout(function() {
            $(el).animate({ opacity: 1 }, 300, done)
            console.log('settimeout')
          }, delay)
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>