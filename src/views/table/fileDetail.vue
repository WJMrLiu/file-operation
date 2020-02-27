<template>
  <div class="app-container">
    <!-- <h4>桶访问明细查询</h4> -->
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" inline="true">
      <el-form-item prop="transDate" label="桶名" style="padding-right:20px;">
        <el-input v-model="form.transDate" />
      </el-form-item>

      <el-form-item prop="transDate" label=" 访问者" style="padding-right:20px;">
        <el-input v-model="form.transDate" />
      </el-form-item>

      <el-form-item prop="transDate" label="开始日期" style="padding-right:20px;">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
      </el-form-item>

      <el-form-item label="结束日期" style="padding-right:20px;">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm('form')">返回</el-button>
      </el-form-item>
    </el-form>
    <div class="basetable">
      <!-- <div class="selectMenu">
        <el-button type="primary" @click="fetchExcel">导出excel</el-button>
      </div> -->
      <div class="tableMain">
        <el-table
          v-loading="loading"
          :header-cell-style="{ background: '#F3F4F7', color: '#555' }"
          :data="tableDataList"
          style="width: 100%;"
          element-loading-text="拼命加载中"
        >
          <el-table-column align="center" prop="merId" label="桶名" />
          <el-table-column align="center" prop="merName" label="文件名" />
          <el-table-column align="center" prop="handleInfo" label="操作" />
          <el-table-column align="center" prop="mName" label="访问者" />
          <el-table-column align="center" prop="mName" label="时间" />
          <el-table-column align="center" prop="mName" label="操作状态" />
          <!-- <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">
                访问者
              </el-button>
              <el-button size="mini" type="info" @click="handleDelete(scope.$index, scope.row)">
                时间
              </el-button>
              <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">
                操作状态
              </el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tableDataList: [
        { merId: ' shoss.bucket.inner01', merName: 'CloudMusic', handleInfo: '上传' },
        { merId: 'shapp.bucket.outer01', merName: 'KwDownload', handleInfo: '下载' }
      ],
      form: {
        transDate: ''
      },
      rules: {
        transDate: [{ required: true, message: '请输入日期', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
    }
  }
}
</script>
