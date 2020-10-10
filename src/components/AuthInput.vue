<template>
  <div class="input_wrapper">
    <i class="iconfont" :class="icon"></i>
    <input
      type="text"
      :placeholder="text_hint"
      v-model="inputText"
      :class="{
        err: inputErr,
      }"
    />
    <div class="remove_text" v-if="inputRemove" @click="removeInput">
      <b class="iconfont icon-guanbi"></b>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "text_hint", "rule"],
  data() {
    return {
      inputRemove: false,
      inputText: "",
      inputErr: false,
    };
  },
  watch: {
    inputText() {
      if (this.inputText) {
        // 判断输入框是否有内容,在决定清除按钮的显示或隐藏
        this.inputRemove = true;
        // 校验输入框输入内容,如果错误显示提示
        this.inputErr = !this.rule.test(this.inputText);
      } else {
        // 输入框没有内容,则隐藏清除按钮和错误提示的显示
        this.inputRemove = false;
        this.inputErr = false;
      }
    },
  },
  methods: {
    removeInput() {
      this.inputText = "";
    },
  },
};
</script>

<style lang="less">
.input_wrapper {
  display: flex;
  align-items: center;
  position: relative;
  padding: 10/360 * 100vw 20/360 * 100vw 0;
  input {
    width: 100%;
    border-bottom: 1px solid #4a475a;
    background-color: inherit;
    padding-left: 30/360 * 100vw;
    line-height: 40/360 * 100vw;
    font-size: 16/360 * 100vw;
    color: #fff;
    &.err {
      border-bottom-color: #b00000;
    }
  }
  i {
    position: absolute;
    left: 26/360 * 100vw;
    color: #84828e;
  }
  .remove_text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 30/360 * 100vw;
    height: 24/360 * 100vw;
    background-color: #ee2979;
    &::before {
      position: absolute;
      content: "";
      left: -12px;
      background-color: #fff;
      border: 6px solid #373447;
      border-right-color: #ee2979;
    }
    .icon-guanbi {
      color: #cac2c2;
    }
  }
}
</style>