<template>
    <div class="modal_list">
      <h2>Package info</h2>
      <div class="modal_items">
        <h3 class="modal_items-title">Name</h3>
        <span class="modal_items-desc">{{modal_data.name}}</span>
      </div>
      <div class="modal_items">
        <h3 class="modal_items-title">Mainfile</h3>
        <span class="modal_items-desc">{{modal_data.mainfile}}</span>
      </div>
      <div class="modal_items">
        <h3 class="modal_items-title">Author</h3>
        <span class="modal_items-desc">{{modal_data.author}}</span>
      </div>
      <div class="modal_items">
        <h3 class="modal_items-title">Description</h3>
        <span class="modal_items-desc">{{modal_data.description}}</span>
      </div>
      <div class="modal_items">
        <h3 class="modal_items-title">Last Version</h3>
        <span class="modal_items-desc">{{modal_data.lastversion}}</span>
      </div>
      <div class="modal_items">
        <h3 class="modal_items-title">Home page</h3>
        <span class="modal_items-desc">{{modal_data.homepage}}</span>
      </div>
      <div v-if="modal_data.github" class="modal_items">
        <h3 class="modal_items-title">GitHub</h3>
        <a  target="_blank" :href="modal_data.github" class="modal_items-desc link">{{modal_data.github}}</a>
      </div>
      <div class="modal_closed">
        <button @click="toggleModal" class="closed">Closed</button>
      </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "modal",
  props:{
    modal_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['toggleModal']),
  }
}
</script>

<style scoped lang="scss">
  .modal_list{
    h2{
      padding: 16px 24px 10px;
      background-color: #e0e0e0;
      text-align: center;
      margin: 0;
    }
    .modal_items{
      .modal_items-title{
        overflow: hidden;
        font-size: 22px;
        line-height: 21px;
        margin:  10px 0 10px 0;
      }
      .modal_items-desc{
        color: rgba(0,0,0,.6);
        font-size: 18px;
        line-height: 21px;
        &.link{
          text-decoration: none;
        }
      }
    }
    .modal_closed{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 20px 0 0 0;
      .closed{
        outline: none;
        background: #0b3f8d;
        padding: 0 2% ;
        height: 42px  ;
        border-radius: 8px;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 425px){
    .modal_list{
      h2{
        padding: 5px 23px 5px;
      }
      .modal_items{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .modal_items-title{
          margin: 10px 0 5px 0;
        }
        .modal_items-desc{
          font-size: 15px;
        }
      }
      .modal_closed{
        justify-content: center;
        .closed{
          padding: 0 5%;
        }
      }
    }
  }
</style>