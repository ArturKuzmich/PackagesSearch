<template>
  <div>
      <Search />
      <Packages />
  </div>
</template>

<script>
import Search from "@/components/search";
import Packages from "@/components/packages";

export default {
  name: 'App',

  components: {
    Packages,
    Search,
  },

  data: () => ({
  }),
};
</script>
