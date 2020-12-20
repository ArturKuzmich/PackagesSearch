<template>
  <div class="packages_body-row">
      <div class="package_desc package_name">{{package_desc.name}}</div>
      <div class="package_desc package_author">{{package_desc.author}}</div>
      <div class="package_desc package_link">
        <a :href="package_desc.github">
          Go to GitHub
        </a>
      </div>
  </div>
</template>

<script>
export default {
name: "package",
  props: {
    package_desc:{
      type: Object,
      default: ()=> {
        return {}
      }
    }
  }
}

</script>

<style scoped lang="scss">
  .packages_body-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 6px;
    overflow: hidden;
    padding: 10px 15px;
    background-color: #fff;
    box-shadow: 0 1px 10px 1px #bcbaba;
    cursor: pointer;
    &:hover{
      background-color: #f4f4f4;
      box-shadow: 0 -2px 6px rgba(52,110,197,.37);
    }
    .package_desc{
      flex-basis: 20%;
      text-align: left;

      &.package_link a{
        text-decoration: none;
        color: #113263;
      }
    }
  }
</style>