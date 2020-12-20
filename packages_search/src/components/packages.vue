<template>
  <div class="packages_table">
    <div class="packages_table-row">
      <div class="title">Package Name</div>
      <div class="title">Package Author</div>
      <div class="title">Package GitHub</div>
    </div>
    <div class="packages_table-body">
    <Package v-for="pack in packages_data" :package_desc="pack" />
    </div>
    <div class="packages_pagination">
      <div class="pagination"></div>
    </div>
  </div>

</template>
<script>
import {mapGetters, mapState} from 'vuex'
import Package from './package'
export default {
  name: 'packages',
  components:{
    Package
  },
  props: {
    packages_data:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data(){
    return{
      packagePage: 10,
    }
  },
  computed: {
    // ...mapState(['loading', 'packages']),
    // ...mapGetters(['filteredPackages']),
    pages(){

    }
  }
}
</script>

<style scoped lang="scss">
    .packages_table{
    max-width: 950px;
      .packages_table-row{
        display: flex;
        justify-content: space-between;
        border-bottom: 3px solid #0b3f8d;
        padding: 0 0 10px 0;
        .title{
          text-align: center;
          cursor: pointer;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0b3f8d;
          box-shadow: -1px 2px 4px rgba(78,78,78,.25);
          border-radius: 10px;
          font-weight: 600;
          font-size: 1.125em;
          color: #fff;
          padding: 0 4%;
        }
      }
      .packages_table-body{

      }
    }
</style>