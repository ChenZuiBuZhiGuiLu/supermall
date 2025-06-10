<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem';

export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;


  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 2px rgba(103, 103, 103, 0.2);
  height: 49px;
}


</style>
