<template>
    <div class="component-container">
        <div>
          <h3>{{ board.board.name }} by {{ board.creator.name }}</h3>
          <ul class = "shared-user-list">
            <h5 class = "shared-user">Shared with</h5>
            <li 
            v-for="(user, index) in board.users" 
            :key="user.id"
            >
            <h5 class = "shared-user">{{ user[0].name }}</h5>
            <h5 class = "shared-user shared-user-comma" v-if="index!==board.users.length-1 &&board.users.length > 2">, </h5>
            <h5 class = "shared-user shared-user-comma" v-if="index===board.users.length-2"> and </h5>            
          </li>
          </ul>
          <ul class="fields">
              <li v-for="(item, index) in board.content" :key="item.id">
                <div class="item-container">
                  <div class="row item">
                      <label :for="item.id" class="active left">Item {{ index + 1 }}</label>
                      <input v-bind:class="{ complete: item.isComplete }" name="item.id" type="text" :value="item.value">
                  </div>
                  <span v-if="item.isComplete"><i class="material-icons right blue-check">check_circle</i></span>
                  <span v-if="item.completedBy">{{ item.completedBy }}</span>
                </div>
              </li>
          </ul>
      </div>
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

<style lang="scss" scoped>

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
            color: hsl(357, 77%, 69%);
          }
        }
        label {
            font-size: 20px;
            text-transform: capitalize;
        }
    }

    .blue-check {
      color: hsl(185, 76%, 48%);
    }
</style>