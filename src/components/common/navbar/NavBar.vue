<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style>
.nav-bar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 2px rgba(103, 103, 103, 0.2);
  line-height: 44px;
  text-align: center
}

.left, .right{
  width: 60px
}

.center {
  flex: 1
}


</style>
