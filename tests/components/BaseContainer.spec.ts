import BaseContainer from '@/components/BaseContainer.vue'
import { shallowMount } from '@vue/test-utils'

describe('BaseContainer.vue', () => {
  it('テキストが正しく表示されることを確認', () => {
    const wrapper = shallowMount(BaseContainer, {
      props: {
        text: 'dummyText',
      },
    })

    expect(wrapper.text()).toBe('dummyText')
  })

  it('生成した要素が正しいことを確認', () => {
    const wrapper = shallowMount(BaseContainer, {
      props: {
        text: 'dummyText',
      },
    })

    expect(wrapper.find('div').exists()).toBeTruthy()
  })
})
