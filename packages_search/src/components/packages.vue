<template>
<!--  <div v-if="loading" >-->
<!--    Loading-->
<!--  </div>-->
<!--<v-simple-table v-else>-->
<!--  <thead >-->
<!--  <tr>-->
<!--    <th class="text-left">Name</th>-->
<!--    <th class="text-left">Calories</th>-->
<!--  </tr>-->
<!--  </thead>-->
<!--  <tbody >-->
<!--  <tr v-if="packages" v-for="package in packages" :key="package.name">-->
<!--    <td>{{ package.name }}</td>-->
<!--    <td></td>-->
<!--  </tr>-->
<!--  </tbody>-->
<!--</v-simple-table>-->
<!--  <div v-if="loading">...loading</div>-->
<!--  <div v-else>{{packages.name}}</div>-->

<div v-if="packages">
  <div  v-for="pack in filteredPackages">
    <span>{{pack.name}}</span>
  </div>
</div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'packages',
  computed: mapState(['loading','packages', 'filteredPackages']),
}
</script>