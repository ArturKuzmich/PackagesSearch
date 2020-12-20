<template>
  <input v-model="query" @input="" placeholder="Enter name packages" />
</template>


<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import debounce from 'lodash.debounce';
export  default {
  name: 'search',
  mounted() {
    this.search()
  },
  computed: {
    ...mapGetters(["filteredPackages"]),
    ...mapState(['searchQuery', 'packages']),

    query: {
      get(){
        return this.searchQuery
      },
      set(val){
        return this.setSearchQuery(val)
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