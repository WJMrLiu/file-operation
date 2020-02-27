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
        <el-form-item label="桶区域类型">
          <el-select v-model="form.getDetailsListValue" placeholder="请选择">
            <el-option
              v-for="item in getDetailsList"
              :key="item.merId"
              :label="item.merName"
              :value="item.merId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所有者（APPID）">
          <el-input v-model="form.transDate" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
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
          <el-table-column align="center" prop="merId" label="桶名" />
          <el-table-column align="center" prop="merName" label="所有者（APPID）" width="200" />
          <el-table-column align="center" prop="macId" label=" 桶区域类型" />
          <el-table-column align="center" prop="payCount" label="最大容量MB" />
          <el-table-column align="center" prop="transType" label="保存期限（天）" />
          <!-- <el-table-column align="center" prop="transType" label="物理文件名" /> -->
          <el-table-column align="center" prop="trans" label="审批结果" />
          <el-table-column align="center" prop="trans" label="审批人" />
          <el-table-column align="center" prop="trans" label="审批时间" />
          <el-table-column align="center" label="操作" width="300">
            <template>
              <el-button size="mini" type="success">
                同意
              </el-button>
              <el-button size="mini" type="danger">
                拒绝
              </el-button>
              <el-button size="mini" type="warning">
                详细
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
  data() {
    return {
      loading: false,
      tableDataList: [
        {
          merId: 'shoss.bucket.inner01',
          merName: 'shapp.test.backend',
          macId: '行内',
          payCount: '1024',
          transType: '130'
        }
      ],
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
          merId: '选项1',
          merName: '桶根路径'
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
  }
}
</script>
