<template>
  <div class="input_wrapper">
    <i class="iconfont icon-shouji1"></i>
    <input type="text" placeholder="请输入内容" />
    <div class="remove_text">
      <b class="iconfont icon-guanbi"></b>
    </div>
  </div>
</template>

<script>
export default {};
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