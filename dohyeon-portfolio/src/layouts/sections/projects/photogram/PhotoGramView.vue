<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Headers page components
import PhotoGramOne from "./components/PhotoGramOne.vue";

// Headers page components codes
import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title=""
    :breadcrumb="[
      { label: 'Home', route: '/' }, //경로 홈 화면으로 바꾸기
      { label: 'photogram' },
    ]"
  >
    <View title="" :code="header1Code" id="header-1">
      <PhotoGramOne />
    </View>
  </BaseLayout>
</template>
