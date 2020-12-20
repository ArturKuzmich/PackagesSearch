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
      <div class="modal_items">
        <h3 class="modal_items-title">GitHub</h3>
        <a :href="modal_data.github" class="modal_items-desc">{{modal_data.github}}</a>
      </div>
    </div>
</template>

<script>
export default {
  name: "modal",
  props:{
    modal_data:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .modal_list{

    h2{
      padding: 16px 24px 10px;
      background-color: #e0e0e0;
      text-align: center;
    }
  }
</style>