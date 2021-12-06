<template>
  <div class="main">
    <div>
      <BaseText text="ノートレゲーム" color="success" size="large" />
    </div>
    <BaseContainer text="表示された数字を３０秒間に、どれだけ多く押せるかをきそうゲームです。" />
    <BaseInput label="Your nickname" placeholder="ニックネーム" :name="name" @input:name="inputName" :action="useInputName"/>
    <BaseButton label="START" color="disabled" :action="useGameStartButton" />
    <div class="main-config">
      <!-- <BaseButton label="Ranking" color="normal" action="change-mode2" /> -->
      <BaseButton label="NORMAL MODE" color="primary" :action="useChangeModeButton" />
      <!-- <BaseButton label="Credit" color="normal" action="change-mode4" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseText from '@/components/BaseText.vue';
import { useChangeModeButton } from '@/composables/use-change-mode-button';
import { useGameStartButton } from '@/composables/use-game-start-button';
import { useInputName } from '@/composables/use-input-name';
import { useStore } from '@/store';
import { storeData, storeKey } from '@/vueStore';
import { defineComponent, provide, ref } from 'vue';

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

    const inputName = (value: string) => {
      name.value = value
      // Vuexを試す
      store.commit('setUser', { name: value, score: 0 })
    }

    // provide / inject を試す
    provide(storeKey, storeData(name))

    return {
      name,
      inputName,
      useGameStartButton,
      useChangeModeButton,
      useInputName,
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
