<template>
  <div class="main">
    <div>
      <BaseText text="ノートレゲーム" color="success" size="large" />
    </div>
    <BaseContainer text="表示された数字を３０秒間に、どれだけ多く押せるかをきそうゲームです。" />
    <BaseInput label="Your nickname" :name="name" @input:name="changeName" />
    <BaseButton label="START" color="primary" action="go-to-game-start" />
    <div class="main-config">
      <BaseButton label="Ranking" color="normal" action="change-mode2" />
      <BaseButton label="NORMAL MODE" color="primary" action="change-mode" />
      <BaseButton label="Credit" color="normal" action="change-mode4" />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseText from '@/components/BaseText.vue';
import { ref, defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent ({
  components: {
    BaseButton,
    BaseContainer,
    BaseInput,
    BaseText,
  },
  setup(props, { emit }) {
    const name = ref('')
    const store = useStore()

    const changeName = (value: string) => {
      name.value = value
      store.commit('setUser', { name: value, score: 0 })
    }

    return {
      name,
      changeName,
    }
  }
})
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
