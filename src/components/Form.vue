<template>

  <div>
    <el-form ref="form" :model="form" label-width="120px">
    <el-input
      type="input"
      autosize
      placeholder="请输入内容"
      v-model="form.name">
    </el-input>
    <div style="margin: 20px 0;"></div>
      <el-input
        type="input"
        autosize
        placeholder="请输入内容"
        v-model="form.logo">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="input"
        autosize
        placeholder="请输入内容"
        v-model="form.domains">
      </el-input>
      <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="form.intro">
    </el-input>


      <div style="margin: 20px 0;"></div>
    <el-button @click="clickPost">确定提交</el-button>
      </el-form>
  </div>

</template>

<script>
    import {get, post} from "../axios/http";
    export default {
        data() {
            return {
                form: {
                    name: '',
                    logo: '',
                    domains: '',
                    intro: ''
                }
            }
        },
        methods: {
            open(msg) {
                this.$message({
                    message: msg,
                    type: 'success'
                });
                return
            },
            clickPost() {
                post('contest/contest-project/create',this.form).then(function (resp) {
                    alert("成功")
                    console.log(resp)
                }).catch()
                console.log('test')
            }
        }
    }
</script>
