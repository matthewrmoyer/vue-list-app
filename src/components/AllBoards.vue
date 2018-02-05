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
                    <div class="card grey lighten-5">
                      <span class="card-title black-text">{{ board.board.name }}</span>
                      <div class="card-content money-blue darken-3 white-text">
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
                      <div class="card-action money-red white-text">
                        <a class="money-red white-text" href="#">This is a link</a>
                        <a class="money-red white-text" href="#">This is a link</a>
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

  .card-title {
    color: white;
    line-height: 2;
  }

  .card-items {
    margin: auto;
  }

</style>