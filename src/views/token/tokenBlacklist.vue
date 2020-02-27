<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="demo-form-inline"
        label-width="160px"
        :inline="true"
      >
        <el-form-item label="桶名" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item>
        <!-- <el-form-item label="token" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item> -->
        <el-form-item>
          <el-button type="info" @click="onSubmit">新增</el-button>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('form')">返回</el-button>
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
          <el-table-column align="center" prop="merId" label="序号" />
          <el-table-column align="center" prop="merName" label=" 桶名" />
          <el-table-column
            align="center"
            prop="macId"
            label=" appid"
            show-overflow-tooltip
          />
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
        {
          merId: "1",
          merName: "shapp.bucket.outer01",
          macId: "shapp.test.backend"
        }
      ],
      getDetailsList: [
        {
          merId: "选项1",
          merName: "行内"
        },
        {
          merId: "选项2",
          merName: "行外"
        }
      ],
      getDetailsList2: [
        {
          merId: "选项1",
          merName: "桶根路径"
        }
      ],
      form: {
        transDate: "",
        getDetailsListValue: ""
      },
      rules: {
        transDate: [{ required: true, message: "请输入日期", trigger: "blur" }]
      }
    };
  },

  methods: {
    onSubmit() {
      this.getPageList();
    }
  }
};
</script>

<style>
.el-tooltip__popper {
  background: #909399 !important;
  max-width: 30% !important;
}
</style>
