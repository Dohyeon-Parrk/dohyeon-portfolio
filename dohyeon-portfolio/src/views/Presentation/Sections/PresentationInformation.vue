<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

import photoMe from "@/assets/img/photoMe.jpg";
import drawingMe from "@/assets/img/drawingMe.jpg";
</script>
<template>
  <section class="my-5 py-5" id="">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              class="custom-image min-vh-75"
              :style="`background-image: url(${photoMe})`"
              loading="lazy"
            />

            <RotatingCardBack
              class="custom-image2 min-vh-75"
              :style="`background-image: url(${drawingMe})`"
              loading="lazy"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-7 ms-auto">
          <h2 class="text-dark mb-0 text-6xl">About Me</h2>
          <h3 class="lead pt-lg-4 font text-sm mb-6">
            늦깎이 비전공 웹개발자로서 훌륭한 개발자를 목표로 앞으로 나아가는
            신입 웹개발자
          </h3>
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Name"
              description="박도현"
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Address"
              description="서울 금천구"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Phone"
              description="010-3089-3213"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Email"
              description="parkyj3213@naver.com parkyj3213@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.custom-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.custom-image2 {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  border-radius: 0.5rem;
  background-image: linear-gradient(195deg, #66bb6a, #43a047);
  opacity: 0.15;
}
</style>
