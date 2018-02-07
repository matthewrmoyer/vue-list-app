<template>
    <div class="component-container">
        <div v-bind:class="{ blur : showModal}" class = "container">
          <h3 class ="capitalize">{{ board.board.name }} by {{ board.creator.name }}</h3>
          <ul class = "shared-user-list">
            <h5 class = "shared-user">Shared with</h5>
            <li 
            v-if="board.users"
            v-for="(user, index) in board.users" 
            :key="user.id"
            >
            <h5 class = "shared-user capitalize">{{ user[0].name }}</h5>
            <h5 class = "shared-user shared-user-comma" v-if="index!==board.users.length-1 &&board.users.length > 2">, </h5>
            <h5 class = "shared-user shared-user-comma" v-if="index===board.users.length-2"> and </h5>            
          </li>
          </ul>
          <ul class="fields">
              <li v-for="(item, index) in board.content" :key="item.id">
                <div class="item-container">
                  <div class="row item">
                      <label :for="item.id" class="active left">Item {{ index + 1 }}</label>
                      <input v-bind:class="{ complete: item.is_complete }" name="item.id" type="text" :value="item.value">
                  </div>
                  <span><i class="medium material-icons right delete" @click="deleteItem({item_id: item.id, board_id: id})">delete_forever</i></span>
                  <span v-if="!item.is_complete"><i class="material-icons medium right blue-check" @click="toggleItemComplete({board_id: id, item_id: item.id, is_complete: !item.is_complete, user: user})">check_box_outline_blank</i></span>                  
                  <span v-if="item.is_complete"><i class="material-icons medium right blue-check" @click="toggleItemComplete({board_id: id, item_id: item.id, is_complete: !item.is_complete, user: user})">check_box</i></span>
                  <span class ="capitalize" v-if="item.completed_by && item.is_complete">{{ item.completed_by }}</span>
                </div>
              </li>
          </ul>
          </div>
          <!-- Modal Trigger -->
          <div class="fixed-action-btn">
            <button class="waves-effect waves-light btn-floating btn-large money-blue darken-1" @click="openModal">
              <i class="large material-icons">add</i>
            </button>
          </div>
          <!-- Modal Structure -->
          <div id="addItemModal" class="custom-modal" v-if="showModal" @click="hideModal()">
            <div class="modal-content">
            <h4>Add A Field and a Data Type</h4>
            <div class="row">
                <label for="new-item" class="left">New Item</label>
                <input
                    type="text" 
                    name="newItem" 
                    id="new-item"
                    placeholder="Type the New Item Here"
                    v-model="newItem.value"
                    @keyup.enter="addItem({id: id, item: newItem}); resetNewItem(); closeModal()"
                >
            </div>
            </div>
            <div class="modal-footer">
              <div  class="modal-icon-container modal-action modal-close waves-effect waves-green btn-flat">
                <i class="material-icons delete" @click="resetNewItem(); closeModal()">close</i>             
                <i class="material-icons blue-check" @click="addItem({id: id, item: newItem}); resetNewItem(); closeModal()">check</i>
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
          title: 'SingleBoard',
          id: this.$route.params.id,
          user: 'Anonymous',
          newItem: {
            value: ''
          },
          showModal: false
        }
      },
      created() {
        $(document).ready(() => {
          $('.modal').modal()
        })
      },
      methods: {
        ...mapActions('singleBoard', [
          'getBoard',
          'addItem',
          'deleteItem',
          'toggleItemComplete'
        ]),
        resetNewItem() {
          this.newItem = {}
        },
        openModal() {
          this.showModal = true
        },
        closeModal() {
          this.showModal = false
        },
        hideModal() {
          if (event.target.id === 'addItemModal') {
            this.closeModal()
            this.resetNewItem()
          }
        }
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

<style lang="scss" scoped>
    $money-red: hsl(357, 77%, 69%);
    
    .component-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

      ul {
          list-style: none;
      }

      .shared-user-list {
        li {
          display: inline;
        }
      }

      .shared-user {
        margin-left: 5px;
        display: inline;
        &.shared-user-comma{
          margin-left: 0 !important;
        }
      }

      .fields {
          margin-bottom: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
      }

      .item-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .item {
          max-width: 70vw;
          min-width: 50vw;
          margin-left: 20px;
          input {
            margin-top: 10px !important; 
            font-size: 30px !important;
            &.complete{
              text-decoration: line-through;
              color: $money-red
            }
          }
          label {
              font-size: 20px;
              text-transform: capitalize;
          }
      }

      .capitalize {
        text-transform: capitalize;
      }

      .blue-check {
        color: hsl(185, 76%, 48%);
        cursor: pointer;
      }

      .delete {
        color: $money-red;
        cursor: pointer;
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
      
</style>