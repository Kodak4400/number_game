<template>
  <div class="main">
    <div>
      <Text text="ノートレゲーム" color="success" size="large" />
    </div>
    <Container text="表示された数字を３０秒間に、どれだけ多く押せるかをきそうゲームです。" />
    <Input label="Your nickname" />
    <Button label="START" color="primary" />
    <div class="main-config">
      <Button label="Ranking" color="normal" />
      <Button label="NORMAL MODE" color="primary" />
      <Button label="Credit" color="normal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Text from './../items/Text.vue'
import Container from './../items/Container.vue'
import Button from './../items/Button.vue'
import Input from './../items/Input.vue'
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .main-config {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>
