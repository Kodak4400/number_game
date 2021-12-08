import { isBtnColorValid, useBtnClasses } from '@/composables/common/use-btn-classes'
import { ref } from 'vue'

describe('use-btn-classes.ts', () => {
  describe('isBtnColorValid', () => { 
    test.each([
      ['primary', true],
      ['success', true],
      ['warning', true],
      ['error', true],
      ['disabled', true],
    ])('%s', (color, expected) => {
      expect(isBtnColorValid(color)).toBe(expected)
    })

    it('other', () => {
      expect(isBtnColorValid('other')).toBe(false)
    })
  })

  describe('useBtnClasses', () => {
    it('primary', () => {
      const color = ref('primary')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': true,
        'is-success': false,
        'is-warning': false,
        'nes-btn': true,
      })
    })

    it('success', () => {
      const color = ref('success')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': true,
        'is-warning': false,
        'nes-btn': true,
      })
    })

    it('warning', () => {
      const color = ref('warning')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': true,
        'nes-btn': true,
      })
    })

    it('error', () => {
      const color = ref('error')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': false,
        'is-error': true,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-btn': true,
      })
    })

    it('disabled', () => {
      const color = ref('disabled')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': true,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-btn': true,
      })
    })

    it('other', () => {
      const color = ref('other')
      expect(useBtnClasses(color).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-btn': true,
      })
    })
  })

})
