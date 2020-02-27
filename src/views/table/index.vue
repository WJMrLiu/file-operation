<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="demo-ruleForm"
        label-width="120px"
        :inline="true"
      >
        <el-form-item prop="transDate" label="桶名" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="resetForm('form')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <div class="basetable">
      <div class="tableMain">
        <el-table
          v-loading="loading"
          :header-cell-style="{ background: '#F3F4F7', color: '#555' }"
          :data="tableDataList"
          align="center"
          element-loading-text="拼命加载中"
        >
          <el-table-column align="center" prop="merId" label="桶名" />
          <el-table-column align="center" prop="merName" label="文件名" />
          <el-table-column align="center" prop="pyType" label="物理文件名" />
          <el-table-column align="center" prop="macId" label=" 分包数" />
          <el-table-column align="center" prop="payCount" label="大小" />
          <el-table-column align="center" prop="transType" label="上传时间" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDataList: [
        {
          merId: 'shapp.bucket.outer01',
          merName: 'GameMaster',
          macId: '12',
          payCount: '1024 MB',
          pyType: 'uuid',
          transType: '20200225  19:31'

        }
      ],
      form: {
        transDate: ''
      },
      rules: {
        transDate: [{ required: true, message: '请输入日期', trigger: 'blur' }]
      }
    }
  }
}
</script>
