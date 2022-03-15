export const rules = {
  name: [
    { required: true, message: '请填写账号名称', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,10}$/, message: '账号名称必须是3到10个数字或字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请填写账号密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,10}$/, message: '账号密码必须是3到10个数字或字符', trigger: 'blur' }
  ]
}
