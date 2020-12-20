<template>
  <div class="packages_search">
    <input class="search_input" v-model="query" @input="" placeholder=" " />
    <label class="item_label">Enter package name</label>
  </div>
</template>


<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import debounce from 'lodash.debounce';
export  default {
  name: 'search',
  mounted() {
    // this.search()
  },
  computed: {
    // ...mapGetters(["filteredPackages"]),
    // ...mapState(['searchQuery', 'packages']),

    query: {
      get(){
        // return this.searchQuery
      },
      set(val){
        // return this.setSearchQuery(val)
      }
    }
  },
  methods: {
    ...mapActions(['setSearchQuery', 'search', ]),

    // debouncedSearch: debounce( function ()  {
    //   this.search()
    // }, 200)
  },


}
</script>

<style scoped lang="scss">
  .packages_search{
    position: relative;
    border-bottom: 1px solid #0b3f8d;
    width: 100%;
    display: flex;
    padding: 0 0 10px 0;
    margin: 30px 0 30px 0;
    .search_input {
      background: transparent;
      width: 100%;
      height: 32px;
      outline: none;
      border: transparent;

      & + .item_label {
        position: absolute;
        left: 0;
        transition: top 0.5s;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
      }

      &:focus, &:not(:placeholder-shown),
      &:-webkit-autofill {
        & + .item_label {
          top: -15px;
          font-weight: 300;
          font-size: 10px;
          line-height: 12px;
          color: rgba(33, 33, 36, 0.37);
        }
      }

    }
  }
  @media only screen and (max-width: 945px){
    .packages_search{
      margin: 30px 0 20px 0;
    }
  }
  @media only screen and (max-width: 425px){
    .packages_search{
      margin: 20px 0 15px 0;
      padding: 0;
      .item_label{
        left: 15px;
        bottom: 5px;
      }
    }
  }
</style>