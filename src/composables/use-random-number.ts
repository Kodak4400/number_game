
export class RandomNumber {
  private numbers: Array<number> = []

  constructor(private num: number) {
    this.init()
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * 10)
  }

  public init() {
    // 変数の初期化
    this.numbers = []

    // 必要な数値を配列に格納(0〜)
    const initNumbers: Array<number> = []
    for (let i = 0; i < 10; i++) {
      initNumbers.push(i)
    }

    // 数値をランダムに並び替えて、変数に格納
    while (this.numbers.length < this.num) {
      const index = initNumbers.indexOf(this.getRandomNumber())
      if (index > -1) {
        this.numbers.push(initNumbers[index])
        initNumbers.splice(index, 1)
      }
    }
  }

  public get() {
    return this.numbers
  }
}
