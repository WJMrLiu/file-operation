<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="demo-form-inline"
        label-width="160px"
      >
        <el-form-item label="桶名" style="padding-right:20px;">
          <el-input v-model="form.transDate" />
        </el-form-item>
        <el-form-item label="桶区域类型" style="padding-right:40px;">
          <el-select v-model="form.getDetailsListValue" placeholder="请选择">
            <el-option
              v-for="item in getDetailsList"
              :key="item.merId"
              :label="item.merName"
              :value="item.merId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所有者（APPID）" style="padding-right:20px;">
          <el-input v-model="form.transDate1" />
        </el-form-item>
        <el-form-item label="所有者公钥" style="padding-right:20px;">
          <el-input v-model="form.transDate2" />
        </el-form-item>
        <el-form-item label="最大容量MB" style="padding-right:20px;">
          <el-input v-model="form.transDate3" />
        </el-form-item>
        <el-form-item label="保存期限（天）" style="padding-right:20px;">
          <el-input v-model="form.transDate4" />
        </el-form-item>
        <el-form-item label="桶存储" style="padding-right:40px;">
          <el-select v-model="form.getDetailsListValue1" placeholder="请选择">
            <el-option
              v-for="item in getDetailsList2"
              :key="item.meId"
              :label="item.meName"
              :value="item.meId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="根路径" style="padding-right:20px;">
          <el-input v-model="form.transDate5" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button @click="resetForm('form')">取消</el-button>
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
      tableDataList: [],
      getDetailsList: [
        {
          merId: '选项1',
          merName: '行内'
        },
        {
          merId: '选项2',
          merName: '行外'
        }
      ],
      getDetailsList2: [
        {
          meId: '选项1',
          meName: '/001 '
        },
        {
          meId: '选项2',
          meName: '/002'
        }
      ],
      form: {
        transDate1: '',
        transDate2: '',
        transDate3: '',
        transDate4: '',
        transDate5: '',
        getDetailsListValue: '',
        getDetailsListValue1: ''
      },
      rules: {
        transDate: [{ required: true, message: '请输入日期', trigger: 'blur' }]
      }
    }
  }
}
</script>
