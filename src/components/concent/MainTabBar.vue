<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <img :src="getIcon('home.svg')" alt="">
        </template>
        <template #item-icon-active >
          <img :src="getIcon('home_active.svg')" alt=""></template>
        <template #item-text>
          <div >首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="green">
        <template v-slot:item-icon>
          <img :src="getIcon('category.svg')" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img :src="getIcon('category_active.svg')" alt=""></template>
        <template v-slot:item-text>
          <div >分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart"  activeColor="green">
        <template v-slot:item-icon>
          <img :src="getIcon('shopcart.svg')" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img :src="getIcon('shopcart_active.svg')" alt=""></template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile"  activeColor="green">
        <template v-slot:item-icon>
          <img :src="getIcon('profile.svg')" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img :src="getIcon('profile_active.svg')" alt=""></template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';


export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    getIcon(filename) {
      return require(`img/tabbar/${filename}`);
    }
  }
}
</script>

<style>
</style>
