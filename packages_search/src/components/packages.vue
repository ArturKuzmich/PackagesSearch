<template>
  <div class="packages_visible">
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else class="packages_table">
      <div class="packages_table-row">
        <div class="title">Package Name</div>
        <div class="title">Package Author</div>
        <div class="title">Last Version</div>
      </div>
      <div v-if="ModalVisible" class="package_modal">
        <Modal
            :modal_data="modalPackage"
        />
      </div>
      <div class="packages_table-body">
        <Package
            @pushToModal="pushToModal"
            v-for="pack in pagination"
            :package_desc="pack"
        />
      </div>
      <div class="packages_pagination">
        <div class="pagination"
             v-for="page in pages"
             :key="page"
             @click="pageChange(page)"
             :class="{'page_choosed' : page === pageNumber}"
        >
          {{ page }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import Package from './package'
import Pagination from "@/components/pagination";
import Modal from "@/components/modal";
import Loading from "@/components/loading";

export default {
  name: 'packages',
  components: {
    Loading,
    Modal,
    Pagination,
    Package
  },
  props: {
    packages_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      packagePage: 10,
      pageNumber: 1,
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters([
      'modalPackage',
      'ModalVisible',
    ]),

    pages() {
      return Math.ceil(this.packages_data.length / 10)
    },
    pagination() {
      let from = (this.pageNumber - 1) * this.packagePage
      let to = from + this.packagePage
      return this.packages_data.slice(from, to)
    }
  },
  methods: {
    ...mapActions(['addToModal']),
    pushToModal(data) {
      this.addToModal(data)
      console.log(data)
    },
    pageChange(page) {
      this.pageNumber = page
    },
  },
  watch: {

    ModalVisible(to) {
      let overflow = document.getElementById('app')
      if (to) {
        overflow.classList.add('overflow')
      } else {
        overflow.classList.remove('overflow')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.packages_visible {
  width: 70%;

  .packages_table {
    width: 100%;

    .packages_table-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid #0b3f8d;
      padding: 0 0 10px 0;

      .title {
        text-align: center;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0b3f8d;
        box-shadow: -1px 2px 4px rgba(78, 78, 78, .25);
        border-radius: 10px;
        font-weight: 600;
        font-size: 1.125em;
        color: #fff;
        padding: 0 4%;
      }
    }

    .package_modal {
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      z-index: 2;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.87);
      padding: 20px;
      width: 100%;
      top: 0;
      position: absolute;
      /* max-width: 800px; */
      left: 0;
      overflow-y: scroll;
      height: 100vh;
    }

    .packages_table-body {

    }

    .packages_pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 25px 0 0 0;

      .pagination {
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        border: 2px solid #0b3f8d;
        margin: 8px;

        &:hover {
          background: #0b3f8d;
          color: #fff;
        }

        &.page_choosed {
          background: #0b3f8d;
          color: #fff;
        }
      }
    }
  }

}
@media only screen and (max-width: 600px) {
  .packages_visible {
    width: 80%;
  }
}
@media only screen and (max-width: 425px) {
  .packages_visible {
    width: 95%;
    .packages_table {
      .packages_table-row {
        .title {
          font-size: 15px;
          line-height: 19px;
          height: 28px;
        }
      }

      .package_modal {
        padding: 15px;
      }

      .packages_table-body {
        .packages_body-row {
          padding: 5px 20px;

          .package_desc {
            width: 35%;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 375px) {
  .packages_visible {
    .packages_table {
      .packages_table-row {
        .title {
          padding: 0 2%;
          height: 32px;
        }
      }

      .packages_table-body {
        .packages_body-row {
          padding: 5px 10px;
        }
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  .packages_visible {
    width: 100%;
    .packages_table {
      .packages_table-row {
        .title {
          font-size: 12px;
        }
      }
    }
  }
}
</style>