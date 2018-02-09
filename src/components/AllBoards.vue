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
      <div class="fixed-action-btn">
        <button class="waves-effect waves-light btn-floating btn-large money-blue darken-1" @click="openModal">
          <i class="large material-icons">add</i>
        </button>
      </div>
          <div id="addBoardModal" class="custom-modal" v-if="showModal" @click="hideModal()">
            <div class="modal-content">
            <h4>Create a New Board</h4>
            <div class="row">
                <label for="new-item" class="left">New Board Name</label>
                <input
                    type="text" 
                    name="newBoard" 
                    id="new-item"
                    placeholder="Type the New Board Name Here"
                    v-model="newBoard.title"
                    @keyup.enter="addBoard({name: newBoard.title, creator: userId}); resetNewBoard(); closeModal()"
                >
            </div>
            </div>
            <div class="modal-footer">
              <div  class="modal-icon-container modal-action modal-close waves-effect waves-green btn-flat">
                <i class="material-icons delete" @click="resetNewBoard(); closeModal()">close</i>             
                <i class="material-icons blue-check" @click="addBoard({name: newBoard.title, creator: user.id}); resetNewBoard(); closeModal()">check</i>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    
    export default {
      data() {
        return {
          title: 'All Boards',
          show: true,
          showModal: false,
          user: {
            name: 'Anonymous',
            id: '1'
          },
          newBoard: {
            name: ''
          }
        }
      },
      computed: {
        ...mapGetters('allBoards', [
          'boards'
        ])
      },
      methods: {
        ...mapActions('allBoards', [
          'getBoards',
          'addBoard'
        ]),
        beforeEnter(el) {
          el.style.opacity = 0
        },
        enter(el, done) {
          let delay = el.dataset.index * 150
          setTimeout(function() {
            $(el).animate({ opacity: 1 }, 300, done)
          }, delay)
        },
        hideItem() {
          if (event.target.parentNode.parentNode) {
            let itemContainer = event.target.parentNode.parentNode
            if (itemContainer.classList.contains('item-container')) {
              itemContainer.classList.add('display-none')
            }
          }
        },
        resetNewBoard() {
          this.newBoard = {}
        },
        openModal() {
          this.showModal = true
        },
        closeModal() {
          this.showModal = false
        },
        hideModal() {
          if (event.target.id === 'addBoardModal') {
            this.closeModal()
            this.resetNewBoard()
          }
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

      .custom-modal {
        height: 100vh;
        width: 100vw;
        background: rgba(211, 211, 211, 0.591);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
      }

      .modal-content {
        background: white;
        width: 70vw;        
      }

      .modal-icon-container {
        display: flex;
        justify-content: space-between;
        background: white;
        width: 70vw;
      }

      .modal-footer {
        i{
          font-size: 3rem !important;
        }
      }

      .blur {
        filter: blur(5px);        
      }
      
      .display-none {
        display: none !important;
      }

</style>