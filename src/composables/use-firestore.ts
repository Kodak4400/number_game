import { Data, IStore } from '@/interface/IStore';

export class FireStore implements IStore {
  constructor() {
    console.log('FireStore')
  }

  get() {
    console.log('FireStore get')
    return [
      {
        name: 'FireStore',
        score: 100,
      },
    ]
  }

  put(data: Data) {
    console.log('FireStore put')
  }

  delete() {
    console.log('FireStore delete')
  }
}

