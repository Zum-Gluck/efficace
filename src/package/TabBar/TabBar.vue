<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#TabBar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  z-index: 9;
}
</style>