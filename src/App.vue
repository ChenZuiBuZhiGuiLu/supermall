<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>


<script>
import MainTabBar from 'components/concent/MainTabBar';

export default {
  name: "app",
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url(assets/css/base.css);

</style>
