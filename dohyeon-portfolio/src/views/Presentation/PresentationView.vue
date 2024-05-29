<script setup>
import { onMounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//js
import Typed from "typed.js";

// sections
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import imgHelloWorld from "@/assets/img/helloworld.jpg";
import imgJava from "@/assets/img/logos/Java.jpg";
import imgSpring from "@/assets/img/logos/Spring.jpg";
import imgNodeJS from "@/assets/img/logos/NodeJS.jpg";
import imgMySQL from "@/assets/img/logos/MySQL.jpg";
import imgHTML from "@/assets/img/logos/HTML.jpg";
import imgCSS from "@/assets/img/logos/CSS.jpg";
import imgJavaScript from "@/assets/img/logos/JavaScript.jpg";
import imgVueJS from "@/assets/img/logos/VueJS.jpg";
import imgGit from "@/assets/img/logos/Git.jpg";
import imgGithub from "@/assets/img/logos/Github.jpg";
import imgGitLab from "@/assets/img/logos/GitLab.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 300,
      startDelay: 500,
      loop: true,
    });
  }
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header id="home">
    <div
      class="page-header min-vh-75"
      :style="{backgroundImage: `url(${imgHelloWorld})`}"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-10 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              박도현
            </h1>
            <h1 class="text-white">
              I'am a <span class="text-white pt-1" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <!-- <h1>풀스택을 향한</h1> -->
              <h1>1년 차</h1>
              <h1>웹 개발자</h1>
            </div>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              To become a FullStack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationInformation id="about" />

    <div class="container mt-6" id="educations">
      <div class="row">
        <h3 class="text-dark mb-0 text-6xl mb-6 text-center">Educations</h3>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-info' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="2009-2015"
            description="울산대학교 영어영문학 전공"
            :action="{
              route: 'https://www.ulsan.ac.kr/kor/Main.do',
              label: { text: 'Informations', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-3"
            :color="{ text: 'white', background: 'bg-gradient-info' }"
            :icon="{ component: 'precision_manufacturing', color: 'white' }"
            title="2022.05-2022.11"
            description="더조은컴퓨터 아카데미 신촌"
            description2="자바,스프링기반 데이터융합 SW개발자 과정"
            :action="{
              route: 'https://ic.tjoeun.co.kr/',
              label: { text: 'Informations', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-3"
            :color="{ text: 'white', background: 'bg-gradient-info' }"
            :icon="{ component: 'receipt_long', color: 'white' }"
            title="2023.01-2023.03"
            description="해피잡 기업연수원"
            description2="분석과 설계를 활용한 VueJS 실무훈련"
            :action="{
              route: 'http://happyjob.kr/',
              label: { text: 'Informations', color: 'white' },
            }"
          />
        </div>
      </div>
    </div>
    <div class="container mt-8" id="skills">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3 class="text-dark mb-0 text-6xl mb-4">Available Skills</h3>
          <div class="d-flex justify-content-center mt-5 flex-wrap">
            <img
              :src="imgJava"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgSpring"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgNodeJS"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgMySQL"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgHTML"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgCSS"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgJavaScript"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgVueJS"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgGit"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgGithub"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
            <img
              :src="imgGitLab"
              alt="title"
              loading="lazy"
              :style="{ height: '90px' }"
            />
          </div>
        </div>
      </div>
    </div>
    <PresentationExample :data="data" />
  </div>
  <DefaultFooter />
</template>
