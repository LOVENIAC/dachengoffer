<template>
  <div>
    <div class="banner">
      <img :src="BasicImg.banner">
    </div>
    <!-- 留学 -->
    <el-form
      v-if="channel === 'abroad'"
      :model="abroadForm"
      label-position="top"
      :rules="rules"
      ref="abroadForm"
      label-width="80px"
      class="form"
    >
      <!-- 姓名 -->
      <el-form-item
        label="姓名"
        prop="name"
      >
        <el-input
          v-model="abroadForm.name"
          placeholder="请输入您的姓名"
        ></el-input>
      </el-form-item>
      <!-- 学校 -->
      <el-form-item
        label="学校"
        prop="school"
      >
        <el-input
          v-model="abroadForm.school"
          placeholder="请输入您的学校名称"
        ></el-input>
      </el-form-item>
      <!-- 专业 -->
      <el-form-item
        label="专业"
        prop="major"
      >
        <el-input
          v-model="abroadForm.major"
          placeholder="请输入您的专业名称"
        ></el-input>
      </el-form-item>
      <!-- 申请国家/地区 -->
      <el-form-item
        label="申请国家/地区"
        prop="area"
      >
        <el-input
          v-model="abroadForm.area"
          placeholder="请输入您要申请的国家/地区"
        ></el-input>
      </el-form-item>
      <!-- 手机号 -->
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          v-model="abroadForm.phone"
          placeholder="请输入您的手机号"
        >
          <template slot="prepend">+86</template>
        </el-input>
      </el-form-item>
      <div
        class="form-btn"
        @click="submitForm('abroadForm')"
      >
        名额有限马上报名
      </div>
    </el-form>
    <!-- 求职 -->
    <el-form
      v-else
      :model="offerForm"
      label-position="top"
      :rules="rules"
      ref="offerForm"
      label-width="80px"
      class="form"
    >
      <!-- 姓名 -->
      <el-form-item
        label="姓名"
        prop="name"
      >
        <el-input
          v-model="offerForm.name"
          placeholder="请输入您的姓名"
        ></el-input>
      </el-form-item>
      <!-- 学校 -->
      <el-form-item
        label="学校"
        prop="school"
      >
        <el-input
          v-model="offerForm.school"
          placeholder="请输入您的学校名称"
        ></el-input>
      </el-form-item>
      <!-- 专业 -->
      <el-form-item
        label="专业"
        prop="major"
      >
        <el-input
          v-model="offerForm.major"
          placeholder="请输入您的专业名称"
        ></el-input>
      </el-form-item>
      <!-- 申请国家/地区 -->
      <el-form-item
        label="年级"
        prop="grade"
      >
        <el-select
          v-model="offerForm.grade"
          style="width: 100%;"
        >
          <el-option
            label="大一"
            value="大一"
          ></el-option>
          <el-option
            label="大二"
            value="大二"
          ></el-option>
          <el-option
            label="大三"
            value="大三"
          ></el-option>
          <el-option
            label="大四"
            value="大四"
          ></el-option>
          <el-option
            label="研一"
            value="研一"
          ></el-option>
          <el-option
            label="研二"
            value="研二"
          ></el-option>
          <el-option
            label="已毕业"
            value="已毕业"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input
          v-model="offerForm.email"
          placeholder="请输入您的邮箱"
        >
        </el-input>
      </el-form-item>
      <!-- 微信号 -->
      <el-form-item
        label="微信号"
        prop="wechat"
      >
        <el-input
          v-model="offerForm.wechat"
          placeholder="请输入您的微信号（选填）"
        >
        </el-input>
      </el-form-item>
      <div
        class="form-btn"
        @click="submitForm('offerForm')"
      >
        名额有限马上报名
      </div>
    </el-form>
    <div class="section">
      <img
        v-for="item in BasicImg.content"
        :key="item"
        :src=item
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPromotion",
  created() {
    const channel = this.$route.query.channel || "abroad";
    this.channel = channel;
    if (channel === "abroad") {
      this.BasicImg = this.abroadBasicImg;
    } else if (channel === "offer") {
      this.BasicImg = this.offerBasicImg;
    }
  },
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[34578]\d{9}$$/;
      if (!value) {
        return callback(new Error("邮箱/手机号不能为空"));
      }
      setTimeout(() => {
        if (phoneReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确手机号"));
        }
      }, 500);
    };
    return {
      channel: "abroad",
      BasicImg: [],
      abroadBasicImg: {
        banner: require("@/assets/img/活动推广/竟乘留学/1.png"),
        content: [
          require("@/assets/img/活动推广/竟乘留学/2.png"),
          require("@/assets/img/活动推广/竟乘留学/3.png"),
        ],
      },
      offerBasicImg: {
        banner: require("@/assets/img/活动推广/竟乘求职/1.png"),
        content: [
          require("@/assets/img/活动推广/竟乘求职/2.png"),
          require("@/assets/img/活动推广/竟乘求职/3.png"),
          require("@/assets/img/活动推广/竟乘求职/4.png"),
        ],
      },
      abroadForm: {
        form_id: "1",
        name: "",
        school: "",
        major: "",
        area: "",
        phone: "",
      },
      offerForm: {
        form_id: "2",
        name: "",
        school: "",
        major: "",
        grade: "",
        email: "",
        wechat: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        school: [{ required: true, message: "请输入学校", trigger: "blur" }],
        major: [{ required: true, message: "请输入专业", trigger: "blur" }],
        area: [{ required: true, message: "请输入地区", trigger: "blur" }],
        grade: [
          { required: true, message: "请选择您的年级", trigger: "change" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "请输入邮箱",
            trigger: "blur",
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const form =
            this.channel === "abroad" ? this.abroadForm : this.offerForm;
          this.sendForm(form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async sendForm(form) {
      console.log(form);
      const { data: res } = await this.$http.post("/v1/form/submitForm", form);
      if (res.code === 200) {
        this.$alert('已提交成功！我们会尽快与您取得联系！', '竟乘', {
          confirmButtonText: '确定',
          showCancelButton: false
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 740px;
  }
}
.form {
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 520px;
  .form-btn {
    cursor: pointer;
    margin: 20px auto 0 auto;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
    border-radius: 5px;
    background-color: #428bfe;
    animation: breath 1.3s cubic-bezier(0.33, 0.39, 0.67, 1) infinite;
  }
  @keyframes breath {
    0% {
      transform: scale(1);
    }
    26.7% {
      transform: scale(1.07);
    }
    50% {
      transform: scale(1);
    }
    76.7% {
      transform: scale(1.02);
    }
    to {
      transform: scale(1);
    }
  }
}
.section {
  width: fit-content;
  margin: 0 auto;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 740px;
  }
}
</style>