<template>
  <div class="outer_wrapper">
    <i class="iconfont icon-fanhuijiantou"></i>
    <div class="iconfont icon-xinwen"></div>
    <div class="logo_title">Dark Horse</div>
    <AuthInput
      icon="icon-shouji1"
      text_hint="请输入手机号"
      :rule="ruleNumber"
    />
    <AuthInput
      icon="icon-yonghuming"
      text_hint="请输入用户名"
      :rule="ruleNickname"
    />
    <AuthInput icon="icon-mima3" text_hint="请输入密码" :rule="rulePassword" />
    <AuthButton />
    <div class="login_footer">
      <span>注册</span>
      <span>忘记密码?</span>
    </div>
    <div class="hint_text">更多帮助...</div>
    {{ test() }}
  </div>
</template>

<script>
import AuthInput from "@/components/AuthInput.vue";
import AuthButton from "@/components/AuthButton.vue";
export default {
  components: {
    AuthInput,
    AuthButton,
  },
  data() {
    return {
      ruleNumber: /^1[3|4|5|7|8][0-9]{9}$/,
      ruleNickname: /^\w{3,10}/,
      rulePassword: /^\w{3,11}/,
    };
  },
  methods: {
    test() {},
  },
};
</script>

<style lang="less" scoped>
.outer_wrapper {
  position: relative;
  padding: 20/360 * 100vw;
  box-sizing: border-box;
  background-color: #373447;
  max-height: 100vh;
  height: 100vh;
  .icon-fanhuijiantou {
    font-size: 24/360 * 100vw;
    color: #c2bed8;
  }
  .icon-xinwen {
    font-size: 100/360 * 100vw;
    padding-top: 34/360 * 100vw;
    text-align: center;
    color: #c2bed8;
  }
  .logo_title {
    text-align: center;
    color: #6f6d7b;
    font-size: 18/360 * 100vw;
    margin-bottom: 40/360 * 100vw;
  }
  .login_footer {
    color: #6f6d7b;
    padding: 0 20/360 * 100vw;
    display: flex;
    justify-content: space-between;
    font-size: 14/360 * 100vw;
  }
  .hint_text {
    position: absolute;
    bottom: 10px;
    left: 40%;
    color: #6f6d7b;
  }
  font-size: 12/360 * 100vw;
}
</style>