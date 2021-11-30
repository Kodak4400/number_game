import BaseText from '@/components/BaseText.vue'
import { shallowMount } from '@vue/test-utils'

describe('BaseText.vue', () => {
  it('テキストが正しく表示されることを確認', () => {
    const wrapper = shallowMount(BaseText, {
      props: {
        text: 'dummyLabel',
        color: 'primary',
        size: 'small',
      },
    })

    expect(wrapper.text()).toBe('dummyLabel')
  })

  it('生成した要素が正しいことを確認', () => {
    const wrapper = shallowMount(BaseText, {
      props: {
        text: 'dummyLabel',
        color: 'primary',
        size: 'small',
      },
    })

    expect(wrapper.find('span').exists()).toBeTruthy()
  })

  it('生成したクラスが正しいことを確認', () => {
    const wrapper = shallowMount(BaseText, {
      props: {
        text: 'dummyLabel',
        color: 'primary',
        size: 'small',
      },
    })

    expect(wrapper.find('.is-primary').exists()).toBeTruthy()
  })
})

