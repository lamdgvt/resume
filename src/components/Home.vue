<template>
  <el-row class="home_row">
    <el-col :span="1" :push="4" class="home_col">
      <el-menu default-active="Name" :collapse="true" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="Name">
          <i class="iconfont icon-icon_zhanghao"></i>
        </el-menu-item>
        <el-menu-item index="Info">
          <i class="iconfont icon-icon_wangye"></i>
        </el-menu-item>
        <el-menu-item index="Email">
          <i class="iconfont icon-xiaoxitongzhi"></i>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="15" :push="4">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Row, Col, Menu, MenuItem } from "element-ui";

export default {
  name: "Home",
  components: {
    ElRow: Row,
    ElCol: Col,
    ElMenu: Menu,
    ElMenuItem: MenuItem
  }
};
</script>

<style lang="less" scoped>
.home_row {
  margin-top: 120px;
  height: 450px;
}
.home_col {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
