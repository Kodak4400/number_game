import { isTextColorValid, isTextSizeValid, useTextClasses } from '@/composables/common/use-text-classes'
import { ref } from 'vue'

describe('use-text-classes.ts', () => {
  describe('isTextColorValid', () => {
    test.each([
      ['primary', true],
      ['success', true],
      ['warning', true],
      ['error', true],
      ['disabled', true],
    ])('%s', (color, expected) => {
      expect(isTextColorValid(color)).toBe(expected)
    })

    it('other', () => {
      expect(isTextColorValid('other')).toBe(false)
    })
  })

  describe('isTextSizeValid', () => {
    test.each([
      ['small', true],
      ['medium', true],
      ['large', true],
    ])('%s', (size, expected) => {
      expect(isTextSizeValid(size)).toBe(expected)
    })

    it('other', () => {
      expect(isTextSizeValid('other')).toBe(false)
    })
  })

  describe('useTextClasses', () => {
    it('primary', () => {
      const color = ref('primary')
      const size = ref('medium')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': true,
        'is-success': false,
        'is-warning': false,
        'nes-text': true,
        large: false,
        medium: true,
        small: false,
      })
    })

    it('success', () => {
      const color = ref('success')
      const size = ref('large')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': true,
        'is-warning': false,
        'nes-text': true,
        large: true,
        medium: false,
        small: false,
      })
    })

    it('warning', () => {
      const color = ref('warning')
      const size = ref('small')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': true,
        'nes-text': true,
        large: false,
        medium: false,
        small: true,
      })
    })

    it('error', () => {
      const color = ref('error')
      const size = ref('small')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': false,
        'is-error': true,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-text': true,
        large: false,
        medium: false,
        small: true,
      })
    })

    it('disabled', () => {
      const color = ref('disabled')
      const size = ref('small')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': true,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-text': true,
        large: false,
        medium: false,
        small: true,
      })
    })

    it('other', () => {
      const color = ref('other')
      const size = ref('other')
      expect(useTextClasses(color, size).value).toEqual({
        'is-disabled': false,
        'is-error': false,
        'is-primary': false,
        'is-success': false,
        'is-warning': false,
        'nes-text': true,
        large: false,
        medium: false,
        small: false,
      })
    })
  })
})
