<template>
  <div class="login-account">
    <el-form ref="formRef" :model="accountForm" :rules="rules">
      <el-form-item label="账号名称" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="账号密码" prop="password">
        <el-input v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const accountForm = reactive({
      name: '',
      password: ''
    })
    // 拿到组件el-plus实例的类型
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (!valid) return
        store.dispatch('login/accountLoginAction', { ...accountForm })
      })
    }

    return {
      accountForm,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
