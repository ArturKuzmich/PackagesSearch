<template>
  <div id="app">
    <div class="app_content">
    <div class="packages_search">
      <input class="search_input"
             v-model="search"

             placeholder=" "
      />
      <label class="item_label">Enter package name</label>
    </div>
    <Packages
        :packages_data="result"
    />
    </div>
    <Footer />
  </div>
</template>

<script>
import Packages from "@/components/packages";
import {mapActions, mapGetters} from "vuex";
import Footer from "@/components/v_footer";

export default {
  name: 'App',

  components: {
    Footer,
    Packages,
  },


  data: () => ({
    search: '',
    result: []
  }),


  computed: {
    ...mapGetters(['searchPackages']),
    // searchPackages() {
    //   // return this.$store.getters.searchPackages(this.search)
    //   return this.$store.getters.searchPackages
    // },
  },
  methods: {
    ...mapActions(['getPackages'])
  },
watch: {
    search(to){
      console.log(to)
      if(to == null) return false;
      this.result = this.searchPackages.filter((item) => {
        return to.toLowerCase().split(' ').every(v => item.name.toLowerCase().indexOf(v) > -1)

      })
    }
},
  mounted() {
    this.getPackages()
  }
};
</script>
<style scoped lang="scss">


#app {
  padding: 0 17%;
  position: relative;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
.app_content{
  width: 70%;
  padding-bottom: 90px;
  .packages_search {
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
}
}

.overflow {
  overflow-y: hidden;
  height: 100vh;
  overflow-x: hidden;
}

@media only screen and (max-width: 1600px) {
  #app {
    padding: 0 10%;

  }
}

@media only screen and (max-width: 1366px) {
  #app {
    padding: 0 8%;
    .app_content{
      .packages_search{
        margin: 10px 0 10px 0;
      }
    }
  }
}

@media only screen and (max-width: 945px) {
  #app {
    padding: 0 4%;
    .app_content{
      .packages_search{
        margin: 30px 0 20px 0;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  #app {
    padding: 0 2%;
    .app_content{
      width: 100%;
      .packages_search{
        width: 85%;
      }
    }
  }
}
@media only screen and (max-width: 425px) {
  #app {
    .app_content{
      padding-bottom: 0;
      .packages_search{
        margin: 20px 0 15px 0;
        padding: 0;
        .item_label{
          left: 15px;
          bottom: 5px;
        }
      }
    }
  }
}
</style>