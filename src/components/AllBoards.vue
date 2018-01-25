<template>
    <div>
      <h1>{{ title }}</h1>
       <div class="row">
        <ul>
          <transition-group 
            name="fade" appear 
            v-bind:css="false"  
            v-on:before-enter="beforeEnter"
            v-on:enter="enter" 
            > 
            <li 
              v-for="(board, index) in boards" 
              :key="board.board.name + board.board.id"
              :data-index=index
              class = "card-li"
              >
              <router-link :to="`/singleBoard/${board.board.id}`">
                  <div class="col s12 m6">
                    <div class="card money-blue darken-3">
                      <div class="card-content white-text">
                        <span class="card-title white-text">{{ board.board.name }}</span>
                        <ul class = "card-items">
                          <li 
                            v-for="(item, index) in board.content" 
                            :key="item + index"
                            :data-index=index
                            >
                            {{ item.value }} 
                          </li>
                        </ul>
                      </div>
                      <div class="card-action">
                        <a class="money-red-text text-lighten-1" href="#">This is a link</a>
                        <a class="money-red-text text-lighten-1" href="#">This is a link</a>
                      </div>
                    </div>
                  </div>
              </router-link>                    
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    
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
        ...mapActions('allBoards', [
          'getBoards'
        ]),
        beforeEnter(el) {
          el.style.opacity = 0
        },
        enter(el, done) {
          let delay = el.dataset.index * 150
          setTimeout(function() {
            $(el).animate({ opacity: 1 }, 300, done)
          }, delay)
        }
      },
      mounted() {
        this.getBoards()
      }
    }
</script>

<style lang="scss" scoped>
  .card-content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .card-items {
    margin: auto;
  }

</style>