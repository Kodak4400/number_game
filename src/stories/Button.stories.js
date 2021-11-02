import Button from '../components/items/Button.vue'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['normal', 'primary', 'success', 'warning', 'error', 'disabled'],
    },
  },
}

const Template = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
  label: 'Button',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  label: 'Button',
}

export const Error = Template.bind({})
Error.args = {
  color: 'error',
  label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'disabled',
  label: 'Button',
}
