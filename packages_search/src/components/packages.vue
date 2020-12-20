<template>
  <div v-if="packages">
    <div  v-for="pack in packages">
      <span>{{pack.name}}</span>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'packages',
  props: {
    packages_data:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapState(['loading', 'packages']),
    ...mapGetters(['filteredPackages']),
  }
}
</script>