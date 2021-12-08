import { useInterval } from "@/composables/common/use-interval"

describe('use-interval', () => {  
  it('useInterval: 3ms', () => {
    //timerをmock
    jest.useFakeTimers()

    let count = 3
    useInterval(() => {
      count--
    }, 1000)

    expect(count).toBe(3)

    // 1000ミリ秒経過させる
    jest.advanceTimersByTime(1000)
    expect(count).toBe(2)

    // 1000ミリ秒経過させる
    jest.advanceTimersByTime(1000)
    expect(count).toBe(1)
  })
})