export type Data = {
  name: string
  score: number
}

export interface IStore {
  get(): Array<Data>

  put(data: Data): void

  delete(): void
}
