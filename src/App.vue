<template>
  <div class="container">
    <div ref="lottieContainer"></div>
  </div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted } from 'vue'

const lottieContainer = ref(null)

onMounted(() => {
  lottieContainer.value = lottieContainer.value;

  // 初始化Lottie动画
  const lottieAnimation = lottie.loadAnimation({
    container: lottieContainer.value as unknown as Element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'bloom.json',
  });

  // 初始化GSAP动画
  gsap.registerPlugin(ScrollTrigger);

  const animationTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: lottieContainer.value,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers:true
    },
  });

  animationTimeline.to(lottieAnimation, {
    onUpdate: () => lottieAnimation.goToAndStop(animationTimeline.progress() * lottieAnimation.totalFrames, true),
  });
})
</script>

<style>
.container {
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container div {
  position: sticky;
  top: 50%;
  height: 300px;
  width: 300px;
  transform: translateY(-50%);
}
</style>