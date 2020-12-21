<template>
  <div @click="pushToModal" class="packages_body-row">
    <div class="package_desc package_name">{{ package_desc.name }}</div>
    <div class="package_desc package_author">{{ package_desc.author }}</div>
    <div class="package_desc package_link">{{ package_desc.lastversion }}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  name: "package",
  props: {
    package_desc: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['toggleModal']),
    pushToModal(){
      this.$emit('pushToModal', this.package_desc)
      this.toggleModal()
    }
  },
}

</script>

<style scoped lang="scss">

.packages_body-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  border-radius: 6px;
  overflow: hidden;
  padding: 10px 15px;
  background-color: #fff;
  box-shadow: 0 1px 10px 1px #bcbaba;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
    box-shadow: 0 -2px 6px rgba(52, 110, 197, .37);
  }

  .package_desc {
    width: 35%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;


    &.package_link a {
      text-decoration: none;
      color: #113263;
    }
  }
}

@media only screen and (max-width: 425px) {
  .packages_table-body {
    .packages_body-row {
      padding: 10px 20px;
      .package_desc {
        font-size: 15px;

      }
    }
  }
}
@media only screen and (max-width: 320px){
  .packages_body-row{
    margin: 5px 0;
  }
}
</style>