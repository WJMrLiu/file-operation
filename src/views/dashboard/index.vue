<template>
  <div class="dashboard-container">
    <div class="dashboard-text">选择左侧导航栏展示对应信息</div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: 'Dashboard'
  // computed: {
  //   ...mapGetters(["name"])
  // }
}
</script>

<style lang="less" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 20px;
    line-height: 46px;
  }
}
</style>
