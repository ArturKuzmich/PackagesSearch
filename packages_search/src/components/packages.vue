<template>
  <div class="packages_table">
    <div class="packages_table-row">
      <div class="title">Package Name</div>
      <div class="title">Package Author</div>
      <div class="title">Package GitHub</div>
    </div>
    <div class="packages_table-body">
    <Package v-for="pack in pagination" :package_desc="pack" />
    </div>
    <div class="packages_pagination">
      <div class="pagination"
           v-for="page in pages"
           :key="page"
           @click="pageChange(page)"
           :class="{'page_choosed' : page === pageNumber}"
      >
        {{page}}
      </div>
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
      pageNumber: 1
    }
  },
  computed: {
    // ...mapState(['loading', 'packages']),
    // ...mapGetters(['filteredPackages']),
    pages(){
      return Math.ceil(this.packages_data.length / 10)
    },
    pagination(){
      let from = (this.pageNumber - 1) * this.packagePage
      let to = from + this.packagePage
      return this.packages_data.slice(from, to)
    }
  },
  methods: {
    pageChange(page){
      this.pageNumber = page
    }
  },
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
      .packages_pagination{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 25px 0 0 0;
        .pagination{
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          border: 2px solid #0b3f8d;
          margin: 8px;
          &:hover{
            background: #0b3f8d;
            color: #fff;
          }
          &.page_choosed{
            background: #0b3f8d;
            color: #fff;
          }
        }
      }
    }
</style>