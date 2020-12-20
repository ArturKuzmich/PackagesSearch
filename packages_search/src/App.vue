<template>
  <div id="app">
      <Search />
      <Packages
          :packages_data="Packages"
      />
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
<style scoped>
 #app{
   padding:  0 17%;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 }
 @media only screen and (max-width: 1600px){
   #app{
     padding:  0 10%;
   }
 }
 @media only screen and (max-width: 1366px){
   #app{
     padding:  0 8%;
   }
 }
 @media only screen and (max-width: 945px){
   #app{
     padding:  0 4%;
   }
 }
 @media only screen and (max-width: 600px){
   #app{
     padding:  0 2%;
   }
 }
</style>