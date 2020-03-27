<template>
  <div class="app-container">
    <!-- <h4>管理员设定</h4> -->
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-width="120px"
             inline="true"
             style="text-align: center;">
      <el-form-item>
        <el-button type="warning"
                   @click="onSubmit">新增</el-button>
        <el-button type="primary"
                   @click="onSubmit">查询</el-button>
        <el-button @click="resetForm('form')">返回</el-button>
      </el-form-item>
    </el-form>
    <div class="basetable">
      <!-- <div class="selectMenu">
        <el-button type="primary" @click="fetchExcel">导出excel</el-button>
      </div> -->
      <div class="tableMain">
        <el-table v-loading="loading"
                  :header-cell-style="{ background: '#F3F4F7', color: '#555' }"
                  :data="tableDataList"
                  style="width: 100%;"
                  element-loading-text="拼命加载中">
          <el-table-column align="center"
                           prop="merId"
                           label="用户id" />
          <el-table-column align="center"
                           prop="merName"
                           label=" 用户名" />
          <el-table-column align="center"
                           label="操作">
            <template slot-scope="scope">
              <el-button size="mini"
                         type="danger"
                         @click="handleEdit(scope.$index, scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableDataList: [
        { merId: '310104 ', merName: '李江山' },
        { merId: '330100', merName: '高翠兰' }
      ]
    }
  }
}
</script>

