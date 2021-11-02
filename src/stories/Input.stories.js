import Input from '../components/items/Input.vue'

export default {
  title: 'Example/Input',
  component: Input,
}

const Template = args => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args" />',
})

export const NameInput = Template.bind({})
NameInput.args = {
  label: 'Your nicname',
}
