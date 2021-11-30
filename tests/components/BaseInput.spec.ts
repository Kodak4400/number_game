import BaseInput from '@/components/BaseInput.vue'
import { shallowMount } from '@vue/test-utils'

describe('BaseInput.vue', () => {
  it('ラベルが正しく表示されることを確認', () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: 'dummyLabel',
        name: 'dummyName',
      },
    })

    expect(wrapper.text()).toBe('dummyLabel')
  })

  it('生成した$emitが正しいことを確認', () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: 'dummyLabel',
        name: 'dummyName',
      },
    })

    wrapper.vm.$emit('input:name', 'dummyValue')
    expect(wrapper.emitted()['input:name'][0]).toEqual(['dummyValue'])
  })

  it('生成した要素が正しいことを確認', () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: 'dummyLabel',
        name: 'dummyName',
      },
    })

    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
  })
})
