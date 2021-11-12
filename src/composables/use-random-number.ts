
export class RandomNumber {
  private numbers: Array<number> = []
  constructor(private num: number, private min: number = 0) {
    this.init()
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10)
  }

  init() {
    const initNumbers: Array<number> = []

    for (let i = 0; i < 10; i++) {
      initNumbers.push(this.min + i)
    }

    while (this.numbers.length < this.num) {
      const checkedIndex = initNumbers.indexOf(this.getRandomNumber())
      if (checkedIndex > -1) {
        this.numbers.push(initNumbers[checkedIndex])
        initNumbers.splice(checkedIndex, 1)
      }
    }
  }

  getNumbers() {
    return this.numbers
  }
}

// let randomNumber: RandomNumber
// export function useRandomNumber(num: number) {
//   if (!randomNumber) {
//     randomNumber = new RandomNumber(num)
//   }

//   return randomNumber.getNumbers()
// }
