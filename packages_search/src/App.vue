<template>
  <div id="app">
    <div class="packages_search">
      <input class="search_input"
             v-model="search"

             placeholder=" "
      />
      <label class="item_label">Enter package name</label>
    </div>
    <Packages
        :packages_data="searchPackages"
    />
  </div>
</template>

<script>
import Packages from "@/components/packages";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',

  components: {
    Packages,
  },


  data: () => ({
    search: ''
  }),


  computed: {
    searchPackages() {
      return this.$store.getters.searchPackages(this.search)
    },
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
<style scoped lang="scss">


#app {
  padding: 0 17%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .packages_search {
    position: relative;
    border-bottom: 1px solid #0b3f8d;
    width: 70%;
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

.overflow {
  overflow-y: hidden;
  height: 100vh;
}

@media only screen and (max-width: 1600px) {
  #app {
    padding: 0 10%;

  }
}

@media only screen and (max-width: 1366px) {
  #app {
    padding: 0 8%;
  }
}

@media only screen and (max-width: 945px) {
  #app {
    padding: 0 4%;
    .packages_search{
      margin: 30px 0 20px 0;
    }
  }
}

@media only screen and (max-width: 600px) {
  #app {
    padding: 0 2%;
    .packages_search{
      width: 85%;
    }
  }
}
@media only screen and (max-width: 425px) {
  #app {
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
</style>