<template>
  <footer class="footer_content">
    <div class="footer_items">
      <a target="_blank" href="https://github.com/ArturKuzmich">
        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="">
      </a>
      <span class="name_author">Artur Kuzmich</span>
    </div>
  </footer>
</template>

<script>
export default {
name: "v_footer"
}
</script>

<style scoped lang="scss">
  .footer_content{
    position: absolute;
    left: 0;
    bottom: -80px;
    width: 100%;
    height: 80px;
    background: #6c757d;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer_items{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      a{
        width: 3%;
        img{
          width: 100%;
        }
      }
      .name_author{
        color: #0b3f8d;
        font-size: 32px;
        line-height: 29px;
      }
    }
  }
  @media only screen and (max-width: 425px){
    .footer_content{
      height: 50px;
      .footer_items{
        .name_author{
          font-size: 20px;
          line-height: 21px;
        }
      }
    }
  }
</style>