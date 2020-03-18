<template>
  <div class="home">
    <div class="box"></div>
    <div class="px-box"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
};
</script>
<style lang="scss">
.box {
  width: 375px;
  height: 200px;
  background: blue;
}

.px-box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
