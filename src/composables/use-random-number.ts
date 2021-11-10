
class RandomNumber {
  private numbers: Array<number> = []
  constructor(private num: number, private min: number = 0) {
    this.init()
  }

  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  init(num = this.num, min = this.min) {
    const initNumbers: Array<number> = []

    for (let i = 0; i < num; i++) {
      initNumbers.push(min + i)
    }

    while (initNumbers.length > 0) {
      const checkedIndex = initNumbers.indexOf(this.getRandomNumber(0, initNumbers.length))
      if (checkedIndex > -1) {
        this.numbers.push(checkedIndex)
      }
    }
  }

  getNumbers() {
    return this.numbers
  }
}
