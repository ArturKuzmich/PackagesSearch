<template>
  <div id="app">
      <Search />
      <Packages :packages_data="Packages" />
  </div>
</template>

<script>
import Search from "@/components/search";
import Packages from "@/components/packages";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',

  components: {
    Packages,
    Search,
  },


  data: () => ({
  }),


  computed: {
  ...mapGetters(['Packages'])
  },
  methods: {
    ...mapActions(['getPackages'])
  },

  mounted() {
    this.getPackages()
  }
};
</script>
