<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Features page components
import ScmOne from "./components/ScmOne.vue";

// Features page components codes
import { scm1Code } from "./components/codes";

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
      { label: 'scm' },
    ]"
  >
    <View title="" :code="scm1Code" id="scm-1">
      <ScmOne />
    </View>
  </BaseLayout>
</template>
