<template>
    <div class="component-container">
        <div>
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
          <!-- Modal Trigger -->
          <div class="fixed-action-btn">
            <a class="waves-effect waves-light btn-floating btn-large money-blue darken-1 modal-trigger" href="#modal1">
              <i class="large material-icons">add</i>
            </a>
          </div>
          <!-- Modal Structure -->
          <div id="modal1" class="modal">
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
                >
            </div>
            </div>
            <div class="modal-footer">
              <div  class="modal-icon-container modal-action modal-close waves-effect waves-green btn-flat">
                <i class="material-icons delete" @click="resetNewItem()">close</i>             
                <i class="material-icons blue-check" @click="addItem({id: id, item: newItem}); resetNewItem()">check</i>
              </div>
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
          }
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
        }
      },
      computed: {
        ...mapGetters('singleBoard', [
          'board'
        ])
      },
      mounted() {
        $('.modal').modal()
        this.getBoard(this.id)
        $(document).ready(() => {
          $('.modal').modal()
        })
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
      .modal-icon-container {
        display: flex;
        justify-content: space-between;
      }
      .modal-footer {
        i{
          font-size: 3rem !important;
        }
      }
      
</style>