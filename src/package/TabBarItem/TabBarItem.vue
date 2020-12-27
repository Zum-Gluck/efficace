<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemImg"></slot>
    </div>
    <div v-else>
      <slot name="itemImg_active"></slot>
    </div>
    <div :class="{ active: isActive }" :style="ActiveColor">
      <slot name="itemFont"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // 匹配成功返回 true
      return this.$route.path.indexOf(this.path) != -1;
    },
    ActiveColor() {
      // 先判断是否处于活跃状态;
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (this.path == this.$route.path) return;
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tabbar-item {
  flex: 1;
}
.tabbar-item img {
  width: 17px;
  height: 17px;
}
.icon {
  width: 17px;
  height: 17px;
}
.active {
  color: red;
}
</style>
