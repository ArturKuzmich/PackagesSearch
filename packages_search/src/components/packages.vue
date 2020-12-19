<template>
  <div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'packages',
  computed: mapState(['loading','packages'])
}
</script>