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
        <el-form-item label="桶名" prop="transDate" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item>
        <el-form-item label=" token" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="resetForm('form')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      tableDataList: [
        {
          merId: '你好',
          merName: 'helloworld',
          macId: '12',
          payCount: '1024',
          transType: '20200224'
        }
      ],

      form: {
        transDate: '',
        getDetailsListValue: ''
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

<style lang="less">
.dashboard {
  .el-form-item__content {
    position: static !important;
  }
  .el-icon-arrow-up {
    transform: rotateZ(180deg);
  }
}
</style>
