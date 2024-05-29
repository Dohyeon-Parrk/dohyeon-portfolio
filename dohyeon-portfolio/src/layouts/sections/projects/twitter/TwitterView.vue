<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import TwitterOne from "./components/TwitterOne.vue";

// Features page components codes
import { feature1Code } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title=""
    :breadcrumb="[
      { label: 'Home', route: '/' },
      { label: 'twitter-clone' },
    ]"
  >
    <View title="" :code="feature1Code" id="feature-1">
      <TwitterOne />
    </View>
  </BaseLayout>
</template>
