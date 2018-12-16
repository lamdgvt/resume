<template>
  <div class="hello">
    <el-row>
    <el-col :span="2" :push="2">
      <el-menu default-active="1" :collapse="true" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <i class="iconfont icon-icon_zhanghao"></i>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="iconfont icon-icon_wangye"></i>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="iconfont icon-xiaoxitongzhi"></i>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
